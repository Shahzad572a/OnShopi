
module.exports = {
  //...other configuration options...
 
  resolve: {
     
    fallback: {
       
      "net": false,
      "http": false,
      "path": false,
      "url": false
    }
  }
};