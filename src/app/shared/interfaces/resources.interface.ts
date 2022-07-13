export interface ResourcesInterface {
  warehouse: {
    capacity: number;
    values: {
      lumber: number;
      clay: number;
      iron: number;
    };
  };

  granary: {
    capacity: number;
    values: {
      crop: number;
    };
  };

  donuts: {
    values: {
      gold?: number;
      silver?: number;
    };
  };
}

export class ResourcesDto implements ResourcesInterface {
  warehouse: {
    capacity: number;
    values: {
      lumber: number;
      clay: number;
      iron: number;
    };
  };

  granary: {
    capacity: number;
    values: {
      crop: number;
    };
  };

  donuts: {
    values: {
      gold?: number;
      silver?: number;
    };
  };

  constructor(data?: ResourcesDto) {
    if (data) {
      this.warehouse = {
        capacity: data.warehouse.capacity,
        values: {
          lumber: data.warehouse.values.lumber,
          clay: data.warehouse.values.clay,
          iron: data.warehouse.values.iron
        }
      };

      this.granary = {
        capacity: data.granary.capacity,
        values: {
          crop: data.granary.values.crop
        }
      };

      this.donuts = {
        values: {
          gold: data.donuts.values.gold,
          silver: data.donuts.values.silver
        }
      };

      return this;
    }

    this.warehouse = { capacity: 0, values: { clay: 0, iron: 0, lumber: 0 } };
    this.granary = { capacity: 0, values: { crop: 0 } };
    this.donuts = { values: { gold: 0, silver: 0 } };

    return this;
  }
}
