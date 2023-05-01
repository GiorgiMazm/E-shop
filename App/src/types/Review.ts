import User from "./User";
import Item from "./Item";

export default interface Review {
  user: User;
  product: Item;
  title: string;
  description: string;
  rate: number;
  id: number;
}
