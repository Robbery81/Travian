import { VillageInterface } from 'src/app/shared/interfaces/village.interface';

export interface CurrentUserInterface {
  _id: string;
  email: string;
  isAdmin: false;
  villages: VillageInterface[];
  prices: any;
}
