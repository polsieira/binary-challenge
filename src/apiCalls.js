
export const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error fetching data on exoplanets')
  }
  const data = await response.json();
  return data;
}

export const attemptCreateUser = async newUser => {
  const url = 'http://localhost:3001/api/v1/users';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('That username is already associated with another account. Try another email address.');
  }
  return response.json();
};

export const attemptLoginUser = async user => {
  const url = 'http://localhost:3001/api/v1/login';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  console.log(user)
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Email does not exist or password is incorrect');
  }
  return response.json();
};