import Item from "./Item";

export default class User {
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
  private static idCounter = 0;
  private _bag: Item[] = [];
  private readonly _id: number;
  private _email: string;
  private _password: string;

  constructor(email: string, password: string) {
    this._id = ++User.idCounter;
    this._email = email;
    this._password = password;
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
