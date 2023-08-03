import { BASE_URL } from '@money-manager/config';

export const CATEGORY_API_URL = `${BASE_URL}/users`;

export interface CategoryAPIResponse {
  message: string;
}