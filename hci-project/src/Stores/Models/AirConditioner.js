export class AirConditioner {
    constructor(id, status = 'off', temperature = 24, name) {
      this.id = id;
      this.status = status;
      this.temperature = temperature;
      this.name = name;
    }
  }