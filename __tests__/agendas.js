// @flow
import * as sdk from '../src/lib';

jest.setTimeout(10000);
let instance = {};
describe('Agendas', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  it('GET', () => {
    console.log(' ==> ', instance.agenda.test());
    expect(true).toEqual(true);
  });
});

