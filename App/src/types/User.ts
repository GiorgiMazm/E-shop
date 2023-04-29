import Item from "./Item";

export default interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
  id: number;
  admin: boolean;
  bag: Item[];
}
