const button = document.getElementById('button');
button.addEventListener('click', loadData);

function loadData() {
  // Create a XHR Object 
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE: ', xhr.readyState);

  // Optional: Used for spinners and loaders 
  xhr.onprogress = function() {
    console.log('READYSTATE: ', this.readyState);
  }

  xhr.onload = function() {
    console.log('READYSTATE: ', xhr.readyState);
    if(this.status === 200) {
      console.log(this.responseText);
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE: ', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  xhr.onerror = function(){
    console.log('Error occured...')
  }
  xhr.send();

  // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}