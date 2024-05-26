import { Api } from "./api.js";
class AutomationsApi{
    static getUrl(slug) {
        return `${Api.baseUrl}/routines${ slug ? `/${slug}` : ""}`;
    }
    static async getAll(controller){
        return await Api.get(AutomationsApi.getUrl, controller);
    }
    static async add(automation, controller){
        return await Api.post(AutomationsApi.getUrl(),automation, controller);
    }
    static async remove(id, controller){
        return await Api.delete(AutomationsApi.getUrl(id, controller));
    }
    static async get(id, controller) {
        return await Api.get(AutomationsApi.getUrl(id, controller));
    }
    static async modify(id, automation, controller){
        return await Api.put(AutomationsApi.getUrl(id), automation, controller);
    }
    static async execute(id, controller){
        const slug = `${id}/execute`;
        return await Api.put(AutomationsApi.getUrl(slug), controller);
    }
}

class Automation{
    constructor(id,name,actions=[]){
        this.id=id;
        this.name = name;
        this.actions=actions; //Array de actions
    }
}

class Action{
    constructor(device,actionName,params=[], meta){
        this.deviceId=device.id;
        this.actionName=actionName;
        this.params=params;
        this.meta = meta;
    }
}

export {AutomationsApi, Automation, Action}