import { BASE_URL } from '@money-manager/config';

export const TAG_API_URL = `${BASE_URL}/users`;

export interface TagAPIResponse {
  message: string;
}
