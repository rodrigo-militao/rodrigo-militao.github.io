const fetch = require('node-fetch');
const fetchJokePromise = require('./fetchJokePromise');

jest.mock('node-fetch');

it('should fetch jokes', () => {
  const joke = {
    id: 'haMJRfF6hFd',
    joke: 'How do you fix a broken pizza? With tomato paste.',
    status: 200
  };

  fetch.mockImplementation(
    () => Promise.resolve({
      json: () => Promise.resolve(joke),
    })
  );

  return fetchJokePromise().then((data) =>
    expect(data).toEqual('How do you fix a broken pizza? With tomato paste.')
  );
});
