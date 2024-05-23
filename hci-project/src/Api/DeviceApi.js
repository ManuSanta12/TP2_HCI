import { Api } from "./api.js";

class DeviceApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/devices${ slug ? `/${slug}` : ""}`;
  }

  static async add(device) {
    return await Api.post(DeviceApi.getUrl(),device);
  }

  static async modify(device) {
    return await Api.put(DeviceApi.getUrl(device.id), device);
  }

  static async delete(id) {
    return await Api.delete(DeviceApi.getUrl(id));
  }

  static async get(id) {
    return await Api.get(DeviceApi.getUrl(id));
  }

  static async getAll() {
    return await Api.get(DeviceApi.getUrl())
  }
}

class Device {
  constructor(id, name, type, meta) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.meta = meta;
    // this.state = state;
  }
  // getType(){
  //   return this.type;
  // }
  toString(){
    return JSON.stringtify(this, null, 2)
  }
}
export { DeviceApi, Device }
