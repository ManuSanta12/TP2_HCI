import { Api } from "./api.js";

class DeviceApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/devices${ slug ? `/${slug}` : ""}`;
  }

  static async add(device, controller) {
    return await Api.post(DeviceApi.getUrl(),device, controller);
  }

  static async modify(device, controller) {
    return await Api.put(DeviceApi.getUrl(device.id), device, controller);
  }

  static async remove(id, controller) {
    return await Api.delete(DeviceApi.getUrl(id, controller));
  }

  static async get(id, controller) {
    return await Api.get(DeviceApi.getUrl(id, controller));
  }

  static async getAll(controller) {
    return await Api.get(DeviceApi.getUrl(), controller)
  }

  static async executeAction(id, actionName, controller) {
    //slug es el path de la API, en este caso es el id del dispositivo y el nombre de la accion
    const slug = `${id}/${actionName}`
    return await Api.put(DeviceApi.getUrl(slug), controller)
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
  
  toString(){
    return JSON.stringtify(this, null, 2)
  }
}
export { DeviceApi, Device }
