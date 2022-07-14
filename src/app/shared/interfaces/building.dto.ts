export class BuildingDto {
  field: string;
  level: number;
  endDate: Date;

  constructor(data?: BuildingDto) {
    if (data) {
      this.field = data.field;
      this.level = data.level;
      this.endDate = new Date(data.endDate);

      return this;
    }
  }
}
