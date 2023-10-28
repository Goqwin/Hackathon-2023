import axios from 'axios';

axios.get('http://your-django-server.com/api/endpoint')
     .then(response => {
         console.log(response.data);
     })
     .catch(error => {
         console.error("Error fetching data:", error);
     });

// Path: frontend/src/App.js
