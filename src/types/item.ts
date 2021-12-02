export interface Item {
  id: number;
  name: string;
  image: string;
  category: string;
  label: string;
  price: string;
  description: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  rating: number;
  comment: string;
  author: string;
  date: string;
}
