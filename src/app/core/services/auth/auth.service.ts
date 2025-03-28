import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { IApiResponse, IRegister } from '../../../shared/models';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  consumerAppUrl = environment.consumerAppUrl;

  constructor(private readonly http: HttpClient) {}

  register(user: IRegister): Observable<IApiResponse> {
    return this.http
      .post<IApiResponse>(`${this.consumerAppUrl}/auth/signup`, user)
  }
}
