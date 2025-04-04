import { Roles } from "./roles";

export interface IUser {
    id: number;
    username: string;
    enabled: boolean;
    roles: Roles
}
