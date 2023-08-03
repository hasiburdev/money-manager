import { BASE_URL } from '@money-manager/config';

export const RECORD_API_URL = `${BASE_URL}/users`;

export interface RecordAPIResponse {
  message: string;
}