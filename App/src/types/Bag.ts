import Item from "./Item";

export default interface Bag {
  userId: number;
  products: Item[];
}
