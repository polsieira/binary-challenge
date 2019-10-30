
export const getData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('There was an error')
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
    throw new Error('Email address already in use');
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
    throw new Error('Email and password do not match');
  }
  return response.json();
};