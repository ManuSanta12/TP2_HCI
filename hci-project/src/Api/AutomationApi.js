import { Api } from "./api.js";
//  TODO algunos metodos le pasan id y controller a getUrl en lugar de al metodo de api put/post/get.etc
class AutomationApi {
  static getUrl(slug) {
    return `${Api.baseUrl}/Automations${ slug ? `/${slug}` : ""}`;
  }

  static async add(Automation, controller) {
    return await Api.post(AutomationApi.getUrl(),Automation, controller);
  }

  static async modify(Automation, controller) {
    return await Api.put(AutomationApi.getUrl(Automation.id), Automation, controller);
  }

  static async remove(id, controller) {
    return await Api.delete(AutomationApi.getUrl(id, controller));
  }

  static async get(id, controller) {
    return await Api.get(AutomationApi.getUrl(id, controller));
  }

  static async getAll(controller) {
    return await Api.get(AutomationApi.getUrl(), controller)
  }

  static async getAutomationTypes(AutomationTypeId, controller) {
    return await Api.get(`${Api.baseUrl}/Automationtypes/${AutomationTypeId}`, controller)
  }
  
  static async runActionNoParams(id, actionName, controller) {
    const slug = `${id}/${actionName}`
    console.log(AutomationApi.getUrl(slug))
    return await Api.putNoBody(AutomationApi.getUrl(slug), controller) 
  }
  
  static async runAction(id, actionName, data = null, controller) {
    const slug = `${id}/${actionName}`
    // if (actionName == "turnOn" || actionName === "turnOff"){
    //   return await Api.put(AutomationApi.getUrl(slug), controller) 
    // }
    return await Api.put(AutomationApi.getUrl(slug), data, controller)
  }
}

class Automation {
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
export { AutomationApi, Automation }
