import { Api } from "./api.js";

class DeviceApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/devices${ slug ? `/${slug}` : ""}`;
  }

  static async add(device) {
    return await Api.post(DeviceApi.getUrl(), 'go46xmbqeomjrsjr',device);
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
  constructor(id, name, meta, type) {
    if (id) {
      this.id = id;
    }
    this.type = type;
    this.name = name;
    this.meta = meta;
  }
  toString(){
    return JSON.stringtify(this, null, 2)
  }
}
export { DeviceApi, Device }
