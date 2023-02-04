export interface News {
  id: string;
  title: string;
  description: string;
  datetimeAt: string;
  image: string | null;
}
export interface NewsMutation {
  id: string;
  title: string;
  datetimeAt: string;
  image: string | null;
}
export interface ApiNews {
  title: string;
  description: string;
  image: File | null;
}