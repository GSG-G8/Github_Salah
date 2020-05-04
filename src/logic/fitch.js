const checkResponse = response => {
  if (response.status !== 200) {
    return response.json(`Error with the request! ${response.status}`);
  }
  return response.json();
};

const getUserData = url => {
  return fetch(`${url}?access_token=${process.env.accessToken}`)
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getUserData failed ${err}`);
    });
};

export default getUserData;
