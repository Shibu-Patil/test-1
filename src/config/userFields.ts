import type { User } from "../types/user";

export interface FieldConfig {
  name: keyof User;  
  label: string;
  type: string;
  required?: boolean;
}


export const userFields: FieldConfig[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    required: true
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true
  }
];
