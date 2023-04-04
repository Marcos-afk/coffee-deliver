import * as zod from 'zod';

export const CheckoutSchema = zod.object({
  cep: zod
    .string()
    .regex(/^[0-9]{5}-[0-9]{3}$/, { message: 'CEP inválido' })
    .min(1, { message: 'informe o CEP ' }),
  road: zod.string().min(1, { message: 'informe a rua' }),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(1, { message: 'informe o bairro' }),
  city: zod.string().min(1, { message: 'informe a cidade' }),
  uf: zod
    .string()
    .min(1, { message: 'informe o estado' })
    .max(2, { message: 'Apenas dois caracteres são permitidos, Ex: AM,MA...' }),
  number: zod.number(),
});

export type CheckoutSchemaSchemaProps = zod.infer<typeof CheckoutSchema>;
