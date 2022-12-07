/** 
 * EasyHTTP Library
 * Library for making HTTP Request 
 * 
 * @version 2.0.0
 * @author Christopher Asogwa
 * @License MIT 
 * 
 * **/
class EasyHTTP {

  // Make an Http Get Request 
  get(url) {
    return new Promise((resolve, reject)  => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  };

  // Make an Http Post Request
  post(url, data) {
    return new Promise((resolve, reject)  => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  };

  // Make an Http Put Request 
  put(url, data) {
    return new Promise((resolve, reject)  => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  };

  // Make an Http Delete Request 
  delete(url) {
    return new Promise((resolve, reject)  => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'Application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(() => resolve('Resource Deleted'))
      .catch(err => reject(err));
    });
  };
}