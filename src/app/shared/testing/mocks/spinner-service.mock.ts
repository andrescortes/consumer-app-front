import { SpinnerService } from "../../services/spinner.service";

export const spinnerServiceMock = jasmine.createSpyObj<SpinnerService>(
  'SpinnerService',
  ['show', 'hide'],
  {
    loading: false,
  }
);
