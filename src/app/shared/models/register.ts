import { Roles } from ".";

export interface IRegister {
  username: string;
  password: string;
  enabled: boolean;
  roles: Roles;
}
