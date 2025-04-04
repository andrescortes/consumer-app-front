import { AuthLoginEffect } from './auth-login.effects';
import { AuthRegisterEffects } from './auth-register.effects';

export const appEffects = [AuthRegisterEffects, AuthLoginEffect];
