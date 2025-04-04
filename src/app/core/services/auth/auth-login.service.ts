import { Injectable } from '@angular/core';
import { ILoginRequest, ITokenResponse } from '../../../shared/models';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  readonly url = environment.consumerAppUrl;
  login(payload: ILoginRequest): Observable<ITokenResponse> {
    return this.httpClient.post<ITokenResponse>(
      `${this.url}/auth/login`,
      payload
    );
  }

  constructor(private readonly httpClient: HttpClient) {}
}
