import hrRequest from './index'

export function getTopMv(offset, limit = 10) {
  return hrRequest.get("/top/mv", {
    offset,
    limit
  })
}