import app from '../../src/app';

describe('\'review\' service', () => {
  it('registered the service', () => {
    const service = app.service('reviews');
    expect(service).toBeTruthy();
  });
});
