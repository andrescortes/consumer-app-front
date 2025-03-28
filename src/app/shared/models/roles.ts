export type Role = 'admin' | 'user' | 'guest';
export type RoleApply = 'ROLE_GUEST' | 'ROLE_USER' | 'ROLE_ADMIN';

export type Roles = Role[];
export interface RoleModel {
  role: Role;
  roleApply: RoleApply;
}
