export interface IRegisterState {
  message: string;
  loading: boolean;
  error: string | null;
}

export const initialRegisterState: IRegisterState = {
  message: '',
  loading: false,
  error: null,
};
