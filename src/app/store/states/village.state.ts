import { BackendErrorsInterface } from 'src/app/shared/interfaces/backend-errors.interface';
import { VillageInterface } from 'src/app/shared/interfaces/village.interface';

export interface VillageStateInterface {
  currentVillage: VillageInterface | null;
  validationErrors: BackendErrorsInterface | null;
}

export const initialVillageState: VillageStateInterface = {
  currentVillage: null,
  validationErrors: null
};
