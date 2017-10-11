// @flow
import * as sdk from '../src/lib';

jest.setTimeout(10000);
let instance = {};
describe('Agendas', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  it('GET', (done) => {
    instance.agenda.get().then((response) => {
      done();
    });
    expect(true).toEqual(true);
  });
});

