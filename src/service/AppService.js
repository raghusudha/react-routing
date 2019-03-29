import axios from 'axios';
var service = {};
service.doLogin = function(username,password){
    return new Promise(function(resolve, reject) {
      axios.post('http://localhost:3000/api/authenticate', {'username': username, 'password':password })
          .then(res => {
          console.log("from server::"+ res.data);
          resolve(res.data);
        });
    });
  }

  export default service;