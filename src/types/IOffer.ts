export interface IOffer {
  id: string;
  category: string;
  doctorName: string;
  description: string;
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  visitors: number;
  discount: number;
  price: number;
  cover: string | null;
}
