import { BASE_URL } from '@money-manager/config';

export const USER_API_URL = `${BASE_URL}/users`;

export interface UserAPIResponse {
  message: string;
}
