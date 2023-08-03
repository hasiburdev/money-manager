import type { Express } from 'express';

import {
  ACCOUNT_API_URL,
  CATEGORY_API_URL,
  RECORD_API_URL,
  SUBCATEGORY_API_URL,
  TAG_API_URL,
  USER_API_URL,
} from '@money-manager/types';

import { accountRouter } from '../features/account/account.route';
import { categoryRouter } from '../features/category/category.route';
import { recordRouter } from '../features/record/record.route';
import { subCategoryRouter } from '../features/sub-category/sub-category.route';
import { tagRouter } from '../features/tag/tag.route';
import { userRouter } from '../features/user/user.route';

export const configureRoutes = (app: Express) => {
  app.use(USER_API_URL, userRouter);
  app.use(TAG_API_URL, tagRouter);
  app.use(CATEGORY_API_URL, categoryRouter);
  app.use(SUBCATEGORY_API_URL, subCategoryRouter);
  app.use(RECORD_API_URL, recordRouter);
  app.use(ACCOUNT_API_URL, accountRouter);
};
