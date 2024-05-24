export { Api }
//lo saque de un TP ver como se adapta a nuestra api
class Api {

  static get baseUrl() {
    return "http://localhost:8080/api";
  }

  static get timeout() {
    return 60 * 1000;
  }

  //TODO moidifique esta funcion para que lance exception si no es codigo entre 200 - 299
  static async fetch(url, init = {}, controller) {
    controller = controller || new AbortController()
    init.signal = controller.signal
    const timer = setTimeout(() => controller.abort(), Api.timeout)
    try {
      const response = await fetch(url, init)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const text = await response.text()
      const json = text ? JSON.parse(text) : {}
      if (json.error) throw json.error
      return json.result
  } catch (error) {
      if (error.name === "AbortError")
          throw { code: 98, description: [ error.message.toLowerCase() ] }
      else if (error.name === "TypeError")
          throw { code: 99, description: [ error.message.toLowerCase() ] }
      else
          throw error
  } finally {
      clearTimeout(timer)
  }
  }

  static async get(url, controller) {
    return await Api.fetch(url, {},controller);
  }

  static async post(url, data, controller) {
    return await Api.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }, controller);
  }

  static async putNoBody(url, controller) {
    const response = await Api.fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }, controller);
    return response;
  }

  static async put(url, data, controller) {
    let dataArray = [data]
    return await Api.fetch(url,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(dataArray)
    }, controller);
  }

  static async delete(url, controller) {
    return await Api.fetch(url, {
      method: "DELETE",
    }, controller);
  }
}