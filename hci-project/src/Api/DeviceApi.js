import { Api } from "./api.js"; 
//  TODO algunos metodos le pasan id y controller a getUrl en lugar de al metodo de api put/post/get.etc
class DeviceApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/devices${ slug ? `/${slug}` : ""}`;
  }

  static async add(device, controller) {
    return await Api.post(DeviceApi.getUrl(),device, controller);
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

  static async get(id, controller) {
    return await Api.get(DeviceApi.getUrl(id), controller)
  }

  static async getDeviceTypes(deviceTypeId, controller) {
    return await Api.get(`${Api.baseUrl}/devicetypes/${deviceTypeId}`, controller)
  }
  
  // Actualiza el dispositivo (se sobreescriben los campos que se envian, los que no se envian no se modifican)
  // data es una string en formato json perfectito con los campos a modificar
  // ojo pq manda directo lo que recibe en data!!
  static async update(id, data, controller) {
    return await Api.putNoFormat(DeviceApi.getUrl(id), data, controller);
  }

  static async runActionNoParams(id, actionName, controller) {
    const slug = `${id}/${actionName}`
    return await Api.putNoBody(DeviceApi.getUrl(slug), controller) 
  }
  
  static async runActionArray(id, actionName, data, controller) {
    const slug = `${id}/${actionName}`
    return await Api.putArray(DeviceApi.getUrl(slug), data, controller)
  }

  static async runAction(id, actionName, data = null, controller) {
    const slug = `${id}/${actionName}`
    return await Api.put(DeviceApi.getUrl(slug), data, controller)
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
  
  // toString(){
  //   return JSON.stringtify(this, null, 2)
  // }
}
export { DeviceApi, Device }
