export interface User {
  id?: string; // optional because new user may not have id yet
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}
