export interface IUser {
  id: number;
  username: string;
  email: string;
  avatar: null | string;
}

export interface IBlog {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  content: string;
  createdAt: string;
  user: IUser;
}

export interface BlogInput {
  title: string;
  category: string;
  content: string;
  thumbnail: string;
}
