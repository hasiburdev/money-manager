import { BASE_URL } from '@money-manager/config';

export const SUBCATEGORY_API_URL = `${BASE_URL}/users`;

export interface SubCategoryAPIResponse {
  message: string;
}