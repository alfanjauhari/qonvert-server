import { Response } from 'express';

export type ResponseDataBody =
  | Record<string, any>[]
  | Record<string, any>
  | string
  | number;
export interface ResponseData {
  code: number;
  message: string;
  body: ResponseDataBody;
}

export default function response(
  res: Response<ResponseData>,
  data: ResponseData,
): Response<ResponseData> {
  return res.json(data);
}
