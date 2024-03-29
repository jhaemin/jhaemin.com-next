import {
  HttpMethod,
  JhmApiRequest,
  JhmApiResponse,
  ResponsePayload,
} from '@/types/general'

export enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

type Handler<Payload extends ResponsePayload> = (
  req: JhmApiRequest,
  res: JhmApiResponse<Payload>
) => void

export const makeApiHandler = <Payload extends ResponsePayload = undefined>(
  handler: Handler<Payload>,
  method: HttpMethod = HttpMethod.POST
) => {
  return (req: JhmApiRequest, res: JhmApiResponse<Payload>) => {
    if (req.method === ((method as unknown) as string)) {
      return handler(req, res)
    } else {
      res.status(HttpStatus.NOT_FOUND).send(null)
    }
  }
}
