import { TestBed } from '@angular/core/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SpinnerService } from '../../shared/services/spinner.service';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { spinnerServiceMock } from '../../shared/testing/mocks';


describe('HttpErrorInterceptor', () => {
  let http: HttpClient;
  let controller: HttpTestingController;
  let loadingSerMock: jasmine.SpyObj<SpinnerService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: SpinnerService,
          useValue: spinnerServiceMock,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpErrorInterceptor,
          multi: true,
        },
      ],
    });

    http = TestBed.inject(HttpClient);
    controller = TestBed.inject(HttpTestingController);
    loadingSerMock = TestBed.inject(
      SpinnerService
    ) as jasmine.SpyObj<SpinnerService>;
  });

  describe('when intercept', () => {
    it('then should catch request with success status', () => {
      http.get('/test').subscribe((data) => {
        expect(data).toEqual('Success');
      });

      const req = controller.expectOne('/test');
      expect(req.request.method).toEqual('GET');
      expect(req.request.url).toEqual('/test');

      expect(loadingSerMock.show).toHaveBeenCalled();
      req.flush('Success', { status: 200, statusText: 'OK' });
    });
  });

  afterEach(() => {
    controller.verify();
  });

});
