import Item from "./Item";

export default interface User {
  readonly id: number;
  bag: Item[];
}
