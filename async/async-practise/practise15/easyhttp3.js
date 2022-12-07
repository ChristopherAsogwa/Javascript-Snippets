/** 
 * EasyHTTP Library
 * Library for making HTTP Request 
 * 
 * @version 3.0.0
 * @author Christopher Asogwa
 * @License MIT 
 * 
 * **/
class EasyHTTP {

  // Make an Http Get Request 
  async get(url) {
    const response = await fetch(url);

    const resData = await response.json();
    return resData;
  };

  // Make an Http Post Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  };

  // Make an Http Put Request 
  async put(url, data) { 
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(data)
    }); 

    const resData = await response.json();
    return resData;
  };

  // Make an Http Delete Request 
  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await 'Resource Deleted';
    return resData;
  };
}