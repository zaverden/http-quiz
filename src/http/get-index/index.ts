import { HttpFunctionResponse } from "@architect/shared/begin";
import { getData } from "@architect/shared/utils";

export async function handler(req: object): Promise<HttpFunctionResponse> {
  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true, date: getData(""), req }),
  };
}
