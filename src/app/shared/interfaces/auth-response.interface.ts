import { CurrentUserInterface } from 'src/app/shared/interfaces/current-user.interface';

export interface AuthResponseInterface {
  user: CurrentUserInterface;
  refreshToken: string;
  accessToken: string;
}
