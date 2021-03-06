import { error } from '@/constants/error'
import prisma from '@/prisma'
import { makeApiHandler } from '@/utils/node/make-handler'
import { ApiDataSkeleton, validate } from '@/utils/node/validate'
import { withSessionApi } from '@/utils/node/with-session'

export type VerifyJoinReqBody = {
  email: string
  magicKey: string
}

export const verifyJoinReqSkeleton: ApiDataSkeleton<VerifyJoinReqBody> = {
  email: 'string',
  magicKey: 'string',
}

const handler = makeApiHandler(async (req, res) => {
  validate(req.body, verifyJoinReqSkeleton, res)

  const body = req.body as VerifyJoinReqBody
  const { email, magicKey } = body

  const pendingUser = await prisma.pendingUser.findUnique({
    where: {
      email,
    },
  })

  if (!pendingUser) {
    return res.json({
      err: error.AUTH_002,
    })
  }

  if (pendingUser.magicKey !== magicKey) {
    return res.json({
      err: error.AUTH_003,
    })
  }

  const [user] = await prisma.$transaction([
    prisma.user.create({
      data: {
        email: pendingUser.email,
        magicKey: null,
        issuedAt: null,
        joinedAt: pendingUser.joinedAt,
      },
    }),
    prisma.pendingUser.delete({
      where: {
        id: pendingUser.id,
      },
    }),
  ])

  // Success
  req.session.set('userId', {
    id: user.id,
  })

  await req.session.save()

  res.json({ err: null })
})

export default withSessionApi(handler)
