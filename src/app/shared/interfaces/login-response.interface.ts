import { UserInterface } from 'src/app/shared/interfaces/user.interface';

export interface LoginResponseInterface {
  user: UserInterface;
  refreshToken: string;
  accessToken: string;
}
