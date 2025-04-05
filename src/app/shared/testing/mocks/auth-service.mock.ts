import { AuthRegisterService } from "../../../core/services/auth";

export const authServiceMock = jasmine.createSpyObj<AuthRegisterService>('AuthService', {
  consumerAppUrl: 'http://localhost:9000/api/v1/test',
  register: undefined,
});
