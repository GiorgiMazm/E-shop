import { ItemCategory } from "./ItemCategory";
export default interface Item {
  name: string;
  price: number;
  link: string;
  description: string;
  id: number;
  category: ItemCategory;
}
