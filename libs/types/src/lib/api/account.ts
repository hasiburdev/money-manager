import { BASE_URL } from '@money-manager/config';

export const ACCOUNT_API_URL = `${BASE_URL}/users`;

export interface AccountAPIResponse {
  message: string;
}