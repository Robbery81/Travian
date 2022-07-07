export interface ResourcesInterface {
  warehouse: {
    capacity: number;
    lumber: number;
    clay: number;
    iron: number;
  };

  granary: {
    capacity: number;
    crop: number;
    freeCrop: number;
  };

  donuts: {
    gold?: number;
    silver?: number;
  };
}

export class ResourcesDto implements ResourcesInterface {
  warehouse: {
    capacity: number;
    lumber: number;
    clay: number;
    iron: number;
  };

  granary: {
    capacity: number;
    crop: number;
    freeCrop: number;
  };

  donuts: {
    gold?: number;
    silver?: number;
  };

  constructor(data: ResourcesDto) {
    this.warehouse = {
      capacity: data.warehouse.capacity,
      lumber: data.warehouse.lumber,
      clay: data.warehouse.clay,
      iron: data.warehouse.iron
    };

    this.granary = {
      capacity: data.granary.capacity,
      freeCrop: data.granary.freeCrop,
      crop: data.granary.crop
    };

    this.donuts = {
      gold: data.donuts.gold,
      silver: data.donuts.silver
    };
  }
}
