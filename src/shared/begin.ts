import { Dictionary } from "./ts-utils";

export type RequestContext = {
  routeKey: string;
  http: {
    method: string;
    path: string;
  };
};

export type HttpFunctionRequest = {
  version: string;
  routeKey: string;
  rawPath: string;
  pathParameters?: Dictionary<string>;
  rawQueryString: string;
  queryStringParameters?: Dictionary<string>;
  cookies?: string[];
  headers: Dictionary<string>;
  requestContext: RequestContext;
  body?: string;
  isBase64Encoded?: boolean;
};

export type HttpFunctionResponse = HttpFunctionResponseObject | Dictionary;
export type HttpFunctionResponseObject = {
  statusCode: number;
  headers?: Dictionary<string>;
  cookies?: string[];
  body?: string;
  isBase64Encoded?: boolean;
};
