import { error } from '@/constants/error'
import { JhmApiResponse } from '@/types/general'

export type ApiDataType = 'string' | 'number'
export type DetailedApiDataType = {
  type: ApiDataType
  required: boolean
}
export type ApiDataSkeleton = Record<string, ApiDataType | DetailedApiDataType>

const isDetailedApiDataType = (
  data: ApiDataType | DetailedApiDataType
): data is DetailedApiDataType => typeof data === 'object'

export const validate = (
  data: any,
  skeleton: ApiDataSkeleton,
  res: JhmApiResponse
) => {
  const fixedlyTypedSkeleton = Object.keys(skeleton).map((key) => {
    const skeletonValue = skeleton[key]
    const isDetailedData = isDetailedApiDataType(skeletonValue)

    return {
      name: key,
      type: isDetailedData
        ? (skeletonValue as DetailedApiDataType).type
        : skeletonValue,
      required: isDetailedData
        ? (skeletonValue as DetailedApiDataType).required
        : true,
    }
  })

  if (typeof data !== 'object') {
    return res.json({ err: error.REQ_001 })
  }

  fixedlyTypedSkeleton.forEach(({ name, type, required }) => {
    const value = data[name]

    if (required && (value === undefined || value === null)) {
      return res.json({ err: error.REQ_001 })
    }

    if (value && typeof value !== type) {
      return res.json({ err: error.REQ_001 })
    }
  })
}