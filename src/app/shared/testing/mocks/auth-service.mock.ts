import { AuthService } from "../../../core/services/auth/auth-register.service";

export const authServiceMock = jasmine.createSpyObj<AuthService>('AuthService', {
  consumerAppUrl: 'http://localhost:9000/api/v1/test',
  register: undefined,
});
