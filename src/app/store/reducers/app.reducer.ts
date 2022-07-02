import { ActionReducerMap } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store/states/app.state';
import { loginReducer } from 'src/app/store/reducers/login.reducer';

export const appReducer: ActionReducerMap<AppStateInterface, any> = {
  login: loginReducer
};
