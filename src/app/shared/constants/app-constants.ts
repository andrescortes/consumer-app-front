import { RoleModel } from '../models';

export const ROLE_TYPES_ALLOWED: RoleModel[] = [
  { role: 'guest', roleApply: 'ROLE_GUEST' },
  { role: 'user', roleApply: 'ROLE_USER' },
  { role: 'admin', roleApply: 'ROLE_ADMIN' },
];

// key for reducers
export const AUTH_REGISTER_KEY: string = 'authRegister';
export const CHARACTER_KEY: string = 'character';
