export interface IComment {
  id: string;
  comment: string;
  user: {
    name: string;
    avatar: string | null;
  };
  rate: 0 | 1 | 2 | 3 | 4 | 5;
}
