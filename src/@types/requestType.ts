export enum HttpStatus {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  CONFLICT = 409,
  TOO_MANY_REQUESTS = 429,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}

export type MetaPagination = {
  total: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export type MetaResponseType = {
  requestTime?: string | Date;
  executionTime?: number;
  pagination?: MetaPagination;
};

export function getHttpStatus(statusCode: HttpStatus) {
  const types: Record<HttpStatus, string> = {
    [HttpStatus.CONTINUE]: "Continue",
    [HttpStatus.SWITCHING_PROTOCOLS]: "Switching Protocols",
    [HttpStatus.OK]: "OK",
    [HttpStatus.CREATED]: "Created",
    [HttpStatus.ACCEPTED]: "Accepted",
    [HttpStatus.NO_CONTENT]: "No Content",
    [HttpStatus.MOVED_PERMANENTLY]: "Moved Permanently",
    [HttpStatus.FOUND]: "Found",
    [HttpStatus.NOT_MODIFIED]: "Not Modified",
    [HttpStatus.BAD_REQUEST]: "Bad Request",
    [HttpStatus.UNAUTHORIZED]: "Unauthorized",
    [HttpStatus.FORBIDDEN]: "Forbidden",
    [HttpStatus.NOT_FOUND]: "Not Found",
    [HttpStatus.METHOD_NOT_ALLOWED]: "Method Not Allowed",
    [HttpStatus.CONFLICT]: "Conflict",
    [HttpStatus.TOO_MANY_REQUESTS]: "Too Many Requests",
    [HttpStatus.INTERNAL_SERVER_ERROR]: "Internal Server Error",
    [HttpStatus.BAD_GATEWAY]: "Bad Gateway",
    [HttpStatus.SERVICE_UNAVAILABLE]: "Service Unavailable",
    [HttpStatus.GATEWAY_TIMEOUT]: "Gateway Timeout",
  };

  return types[statusCode] ?? `Unknow status code: ${statusCode}`;
}
