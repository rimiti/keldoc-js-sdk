// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('BAD REQUEST', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  afterEach(() => {
    mock.reset();
  });
  it('should throw bad request when parameters are not ok', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '20010923', agenda_id: '2135', state: 'true'})
      .reply(400, {});
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'}).then((response) => {
      expect(response.status).toEqual(400);
      done();
    });
  });
});
