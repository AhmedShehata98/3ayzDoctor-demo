export interface IDoctor {
  id: string;
  name: string;
  description: string;
  cover: string | null;
  rate: 0 | 1 | 2 | 3 | 4 | 5;
  visitors: number;
  price: number;
}
