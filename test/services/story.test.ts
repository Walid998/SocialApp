import app from '../../src/app';

describe('\'story\' service', () => {
  it('registered the service', () => {
    const service = app.service('stories');
    expect(service).toBeTruthy();
  });
});
