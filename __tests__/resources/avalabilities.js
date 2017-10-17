// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Avalabilities', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('GET', (done) => {
    mock.onGet('http://www.example.com/availabilities', {
      agenda_ids: 112,
      end: '2017-09-18',
      start: '2017-09-18',
      motive_id: '366',
    })
      .reply(200, [{
        id: 1,
        name: 'Dr. KelDoc test',
      }, {
        id: 2,
        name: 'Dr. KelDoc test2',
      }, {
        id: 3,
        name: 'Dr. KelDoc test3',
      }]);
    instance.availabilities.get().then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
