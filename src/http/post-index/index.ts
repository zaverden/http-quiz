import * as R from "runtypes";
import {
  HttpFunctionRequest,
  HttpFunctionResponse,
} from "@architect/shared/begin";
import { getData, getId } from "@architect/shared/utils";
import { parseJsonBody } from "@architect/shared/body-parser";

const StartData = R.Record({
  username: R.String,
});

const USERNAME_LENGTH_LIMIT = 128;

export async function handler(
  req: HttpFunctionRequest
): Promise<HttpFunctionResponse> {
  const bodyResult = parseJsonBody(req.body);
  if (bodyResult.success === false) {
    return {
      statusCode: 400,
      body: JSON.stringify(bodyResult),
    };
  }
  const dataValidationResult = StartData.validate(bodyResult.value);
  if (dataValidationResult.success === false) {
    return {
      statusCode: 400,
      body: JSON.stringify(dataValidationResult),
    };
  }

  const username = dataValidationResult.value.username.trim();
  if (username.length === 0) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        success: false,
        message: "Hey, you've sent just some air, give me letters",
        key: "username",
      }),
    };
  }

  if (username.length > USERNAME_LENGTH_LIMIT) {
    return {
      statusCode: 422,
      body: JSON.stringify({
        success: false,
        message: `Be reasonable, no more then ${USERNAME_LENGTH_LIMIT} symbols`,
        key: "username",
      }),
    };
  }

  const quizId = getId();

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      authToken: `${username}-${quizId}`,
    }),
  };
}
