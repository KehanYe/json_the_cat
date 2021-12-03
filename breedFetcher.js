const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  // console.log(url)
  request(url, (error, response, body) => {
    if (error) {
      return callback(error, null); // if there is error in request api, the callback's error references parameter in index, null means theres' no description
    }
    const [data] = JSON.parse(body);
   
    if (!data) {
      return callback(null, "Breed not found"); //null references callback's error parameter in index file), "breed not found" references description parameter in index file
    }
    
    return callback(null, data.description); // no errors, therefore must work
    
    //     if (Object.keys(data).length === 0) callback(null, null); => not correct because description dosen't say "breed not found"
    //  else if (error === null) callback(null, ('Data description is:', data[0].description));
 
  });
   
};


module.exports = {fetchBreedDescription};