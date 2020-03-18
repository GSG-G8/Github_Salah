import accessToken from '../token';

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status}`);
    return;
  }
  return response.json();
};

const getUserData = url => {
  return fetch(`${url}?access_token=${accessToken}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};

export default getUserData;
