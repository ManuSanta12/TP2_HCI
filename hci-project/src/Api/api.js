export { Api }
//lo saque de un TP ver como se adapta a nuestra api
class Api {

  static get baseUrl() {
    return "http://localhost:8080/api";
  }

  static get timeout() {
    return 60 * 1000;
  }

  static async fetch(url, init = {}) {
    console.log('Request URL:', url);
    console.log('Request Init:', init);
    const controller = new AbortController()
    init.signal = controller.signal;
    const timer = setTimeout(() => controller.abort(), Api.timeout);

    try {
      const response = await fetch(url, init);
      const text = await response.text(); 
      const result = text ? (JSON).parse(text) : {};
      if (result.code)  
        throw result;
      return result;
    } catch (error) {
      if (error.code)
        throw error;
      if (error.name === "AbortError")                
        throw { "code": 98, "description": error.message.toLowerCase() };
      else if (error.name === "TypeError")           
        throw { "code": 99, "description": error.message.toLowerCase() };
    } finally {
      clearTimeout(timer);
    }
  }

  static async get(url) {
    return await Api.fetch(url);
  }

  static async post(url, data) {
    return await Api.fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });
  }

  static async put(url, data) {
    return await Api.fetch(url,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    });
  }

  static async delete(url) {
    return await Api.fetch(url, secure, {
      method: "DELETE",
    });
  }
}