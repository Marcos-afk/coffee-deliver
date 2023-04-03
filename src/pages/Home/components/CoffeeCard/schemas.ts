import * as zod from 'zod';

export const CoffeeCardSchema = zod.object({
  amount: zod
    .number()
    .min(1, { message: 'O número mínimo permitido é 1' })
    .max(10, { message: 'O número máximo permitido é 10' }),
});

export type CoffeeCardSchemaProps = zod.infer<typeof CoffeeCardSchema>;
