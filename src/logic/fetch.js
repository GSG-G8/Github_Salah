const checkResponse = response => {
  if (response.status !== 200) {
    return response.json(`Error with the request! ${response.status}`);
  }
  return response.json();
};

const getUserData = url => {
  return fetch(`https://cors-github.herokuapp.com/github-api-req?link=${url}`)
    .then(checkResponse)
    .catch(err => console.log('failed'));
};

export default getUserData;
