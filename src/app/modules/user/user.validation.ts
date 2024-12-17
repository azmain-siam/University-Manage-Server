import { z } from 'zod';

const userValidation = z.object({
  password: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .max(20, { message: 'Password can not be more than 20' }),
});

export default userValidation;
