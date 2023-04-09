import Item from "./Item";

export default class User {
  private static idCounter = 0;
  private _bag: Item[] = [];
  private readonly _id: number;

  constructor() {
    this._id = ++User.idCounter;
  }
  get id(): number {
    return this._id;
  }

  get bag(): Item[] {
    return this._bag;
  }

  get sum(): number {
    return this.bag.reduce((sum, bag) => sum + bag.price, 0);
  }

  addItemToBag(item: Item) {
    this.bag.push(item);
  }

  removeItemFromBag(id: number) {
    const index = this.bag.findIndex((product) => product.id === id);
    this.bag.splice(index, 1);
  }
}
