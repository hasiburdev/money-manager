import { Router } from 'express';

export const userRouter = Router();

userRouter.get('/', (req, res) => {
  res.status(200).json({
    message: 'Successfully got users',
  });
});

userRouter.post('/', (req, res) => {
  res.json({
    message: 'POST successful',
  });
});
