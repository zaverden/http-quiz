import {
  HttpFunctionRequest,
  HttpFunctionResponse,
} from "@architect/shared/begin";
import { getData } from "@architect/shared/utils";

export async function handler(
  req: HttpFunctionRequest
): Promise<HttpFunctionResponse> {
  const id = req.pathParameters?.id ?? "";
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, date: getData(id) }),
  };
}
