import { getData, attemptLoginUser, attemptCreateUser } from './apiCalls';

describe('getData', () => {
  const mockResponse = [{
    pl_name: 'Pluto',
    pl_hostname: 'Sun',
    pl_orbper: 2000,
    gaia_dist: 100,
    pl_disc: 2005
  },
  {
    pl_name: 'Mearth',
    pl_hostname: 'Msun',
    pl_orbper: 563,
    gaia_dist: 8,
    pl_disc: 2000
  }];
  const apiBaseUrl = "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?";
  const table = "table=exoplanets";
  const columns = "&select=pl_name,pl_hostname,pl_orbper,pl_bmassj,pl_masse,pl_radj,pl_rade,pl_nnotes,st_dist,gaia_dist,pl_eqt,pl_disc,pl_mnum,pl_pelink,pl_edelink,pl_dens";
  const parameters = "&order=dec";
  const format = "&format=json"
  const url = `${apiBaseUrl}${table}${columns}${parameters}${format}`;

  it('should use fetch with specified url', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    getData(url);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return selected exoplanet data', () => {
    expect(getData(url)).resolves.toEqual(mockResponse);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getData(url)).rejects.toEqual(Error('There was an error fetching data on exoplanets'));
  });
});

describe('attemptCreateUser', () => {
  const url = 'http://localhost:3001/api/v1/users';
  const newUser = {
    name: 'Meep Meep',
    email: 'email@email.com',
    password: 'password',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  };
  const mockResponse = {
    type: 'cors',
    url: 'http://localhost:3001/api/v1/users',
    redirected: false,
    status: 201,
    ok: true
  };

  it('should call fetch with specified url', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    attemptCreateUser(newUser);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return error if response not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(attemptCreateUser(newUser)).rejects.toEqual(
      Error('That username is already associated with another account. Try another email address.')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('500 Internal Server Error'));
    });

    expect(attemptCreateUser(newUser)).rejects.toEqual(Error('500 Internal Server Error'));
  });
});

describe('attemptLoginUser', () => {
  const url = 'http://localhost:3001/api/v1/login';
  const user = {
    email: 'email@email.com',
    password: 'password',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  };
  const mockResponse = {
    type: 'cors',
    url: 'http://localhost:3001/api/v1/login',
    redirected: false,
    status: 201,
    ok: true
  };

  it('should call fetch with specified url', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
    attemptLoginUser(user);

    expect(window.fetch).toHaveBeenCalledWith(url, options);
  });

  it('should return error if response not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(attemptLoginUser(user)).rejects.toEqual(
      Error('Email does not exist or password is incorrect')
    );
  });

  it('should return an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('500 Internal Server Error'));
    });

    expect(attemptLoginUser(user)).rejects.toEqual(Error('500 Internal Server Error'));
  });
});

