export interface SuccessProps {
  number: number;
  cep: string;
  road: string;
  neighborhood: string;
  city: string;
  uf: string;
  complement?: string | undefined;
  paymentMethod: string;
}
