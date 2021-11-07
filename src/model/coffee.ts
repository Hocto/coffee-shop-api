export interface CoffeeResponse {
  id: number;
  title: string;
  description: string;
  category: string;
  ingredients: string[];
  createdTime: string;
  updatedTime: string;
}

export interface Coffee {
  id: number;
  title: string;
  description: string;
  category: string;
  ingredients: string[];
}

export interface CoffeeRequest {
    title: string;
    description: string;
    category: string;
    ingredients: string[];
  }

export type CoffeeResponseList = CoffeeResponse[];
export type CoffeeList = Coffee[];
