const postPredictCancer = require('../server/handler');


 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: postPredictCancer,
    options: {
      payload: {
        allow: 'multipart/form-data',
        multipart: true
      }
    }
  }
]
 
module.exports = routes;