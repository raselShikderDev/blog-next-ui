export interface IAuthor {
  id: number;
  name: string;
  email: string;
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  isFeatured: boolean;
  tags: string[];
  views: number;
  authorId: number;
  createdAt: Date;
  updatedAt: Date;
  author: Partial<IUser>;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "SUPER_ADMIN" | "ADMIN" | "USER";
  phone: string;
  picture: string;
  status: "ACTIVE" | "INACTIVE" | "BLOCK";
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
