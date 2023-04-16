import Item from "./Item";

export default class User {
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get bag(): Item[] {
    return this._bag;
  }
  set bag(value: Item[]) {
    this._bag = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get admin(): boolean {
    return this._admin;
  }

  set admin(value: boolean) {
    this._admin = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  private static idCounter = 0;
  private _bag: Item[] = [];
  private readonly _id: number;
  private _email: string;
  private _password: string;
  private _admin: boolean;
  private _name: string;
  private _lastName: string;

  constructor(
    email: string,
    password: string,
    name: string,
    lastName: string,
    admin: boolean
  ) {
    this._id = ++User.idCounter;
    this._email = email;
    this._password = password;
    this._admin = admin;
    this._name = name;
    this._lastName = lastName;
  }
  get id(): number {
    return this._id;
  }

  get sum(): number {
    return this.bag.reduce((sum, bag) => sum + Number(bag.price), 0);
  }

  addItemToBag(item: Item) {
    this.bag.push(item);
  }

  removeItemFromBag(id: number) {
    const index = this.bag.findIndex((product) => product.id === id);
    this.bag.splice(index, 1);
  }
}
