const request = require('request');

const fetcher = function(args) {
  args = process.argv.slice(2);
  console.group(args);
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;
  // console.log(url)

  request(`${url}`, (error, response, body) => {
    // console.log(body)
    if (error) {
      console.log('error', error); //Print the error if one occured
    } else {
      const data = JSON.parse(body);
      // console.log(data)
      console.log(data[0].description);
    }
    
  });
};

fetcher();
