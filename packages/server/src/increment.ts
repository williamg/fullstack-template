import { IncrementRequest, IncrementResponse } from "@app/common";

export default function increment (cur: number, req: IncrementRequest): IncrementResponse {
  return { total: cur + req.increment };
}
