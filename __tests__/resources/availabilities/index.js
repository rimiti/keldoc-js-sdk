// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../../src';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Avalabilities', () => {
  beforeAll((done) => {
    sdk.configure({
      credentials: {
        clientAccessKeyId: 'CLIENT_ACCESS_KEY_ID',
        secretAccessKeyId: 'SECRET_ACCESS_KEY_ID',
      },
      host: 'http://www.example.com',
    });

    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('Lazy loading', (done) => {
    mock.onGet('http://www.example.com/availabilities').reply(200);
    return Promise.all([
      instance.availabilities,
      instance.availabilities,
    ])
      .then((instances) => {
        expect(instances[0] === instances[1]);
        return Promise.all([
          instances[0].get({
            agenda_ids: 112,
            end_date: '2017-09-18',
            start_date: '2017-09-18',
            motive_id: '366',
          }),
          instances[1].get({
            agenda_ids: 112,
            end_date: '2017-09-18',
            start_date: '2017-09-18',
            motive_id: '366',
          }),
        ]);
      })
      .then((requests) => {
        expect(requests[0].status).toEqual(200);
        expect(requests[1].status).toEqual(200);
        done();
      });
  });

  it('GET', (done) => {
    mock.onGet('http://www.example.com/availabilities', {
      agenda_ids: 112,
      end_date: '2017-09-18',
      start_date: '2017-09-18',
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
    instance.availabilities.get({
      agenda_ids: 112,
      end_date: '2017-09-18',
      start_date: '2017-09-18',
      motive_id: '366',
    })
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });
});
