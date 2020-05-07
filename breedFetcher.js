const request = require('request');
const breed = process.argv[2];

const userRequest = breed => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err,response,body) => {
    if (err) {
      console.log('An error occured');
    } else {
      const data = JSON.parse(body);
      if (!data.length) {
        console.log('Breed not found');
      } else {
        console.log(data);
      }
    }
  });
};

userRequest(breed);