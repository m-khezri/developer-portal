import axios from 'axios';
import apiKeys from '../../helpers/apiKeys';

const clientId = apiKeys.githubApi.client_id; // The client_id is exactly the key in apiKeys in gitHub. 
const clientSecret = apiKeys.githubApi.client_secret; //The client_secret is exactly the key in apiKeys in gitHub.

const getUser = gitHubUserName => new Promise((resolve, reject) => {
  axios
    .get(`https://api.github.com/users/${gitHubUserName}?client_id=${clientId}&client_secret=${clientSecret}`)
    .then((result) => {
      console.log(result);
      resolve(result.data);
    })
    .catch(err => reject(err));
});

export default getUser;