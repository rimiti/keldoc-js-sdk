// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../../src/index';
import {InvalidDatetimeFormat} from '../../../src/classes/exceptions/index';

let instance = {};
const mock = new MockAdapter(axios);

describe('Available slots', () => {
  beforeAll((done) => {
    sdk.configure({
      auth_token: '165416s5dfsds564sfdf2df',
      host: 'http://www.example.com',
    });

    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('Lazy loading', (done) => {
    mock.onGet('http://www.example.com/available_slots').reply(200);
    return Promise.all([
      instance.availableSlots,
      instance.availableSlots,
    ])
      .then((instances) => {
        expect(instances[0] === instances[1]);
        return Promise.all([
          instances[0].get({
            agenda_id: 112,
            end_date: '2018-03-18',
            start_date: '2018-01-18',
          }),
          instances[1].get({
            agenda_id: 112,
            end_date: '2018-03-18',
            start_date: '2018-01-18',
          }),
        ]);
      })
      .then((requests) => {
        expect(requests[0].status).toEqual(200);
        expect(requests[1].status).toEqual(200);
        done();
      });
  });

  it('GET (with wrong start_date format)', () => {
    mock.onGet('http://www.example.com/available_slots').reply(200);
    return instance.availableSlots.get({
      agenda_id: 112,
      start_date: 'd2018-01-18',
      end_date: '2018-03-18',
    })
      .catch((error) => {
        expect(error.emessage).toEqual('Invalid datetime format (ISO_8601 format required)');
        expect(error).toBeInstanceOf(InvalidDatetimeFormat);
      });
  });

  it('GET (with wrong end_date format)', () => {
    mock.onGet('http://www.example.com/available_slots').reply(200);
    return instance.availableSlots.get({
      agenda_id: 112,
      start_date: '2018-01-18',
      end_date: 'd2018-03-18',
    })
      .catch((error) => {
        expect(error.emessage).toEqual('Invalid datetime format (ISO_8601 format required)');
        expect(error).toBeInstanceOf(InvalidDatetimeFormat);
      });
  });

  it('GET', (done) => {
    mock.onGet('http://www.example.com/available_slots', {
      agenda_ids: 112,
      end_date: '2018-03-18',
      start_date: '2018-01-18',
    })
      .reply(200, [{
        availabilities: [
          {
            start_time: '2018-01-18T15:00:00.000+01:00',
            end_time: '2018-01-18T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-01-19T09:00:00.000+01:00',
            end_time: '2018-01-19T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-01-19T10:00:00.000+01:00',
            end_time: '2018-01-19T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-19T10:00:00.000+01:00',
            end_time: '2018-01-19T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-19T15:00:00.000+01:00',
            end_time: '2018-01-19T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-19T17:00:00.000+01:00',
            end_time: '2018-01-19T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-22T15:00:00.000+01:00',
            end_time: '2018-01-22T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-01-23T15:00:00.000+01:00',
            end_time: '2018-01-23T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-01-24T10:00:00.000+01:00',
            end_time: '2018-01-24T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-24T10:00:00.000+01:00',
            end_time: '2018-01-24T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-24T15:00:00.000+01:00',
            end_time: '2018-01-24T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-25T15:00:00.000+01:00',
            end_time: '2018-01-25T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-01-26T09:00:00.000+01:00',
            end_time: '2018-01-26T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-01-26T10:00:00.000+01:00',
            end_time: '2018-01-26T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-26T10:00:00.000+01:00',
            end_time: '2018-01-26T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-26T15:00:00.000+01:00',
            end_time: '2018-01-26T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-26T17:00:00.000+01:00',
            end_time: '2018-01-26T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-29T15:00:00.000+01:00',
            end_time: '2018-01-29T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-01-30T15:00:00.000+01:00',
            end_time: '2018-01-30T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-01-31T10:00:00.000+01:00',
            end_time: '2018-01-31T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-31T10:00:00.000+01:00',
            end_time: '2018-01-31T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-01-31T15:00:00.000+01:00',
            end_time: '2018-01-31T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-01T15:00:00.000+01:00',
            end_time: '2018-02-01T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-02T09:00:00.000+01:00',
            end_time: '2018-02-02T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-02-02T10:00:00.000+01:00',
            end_time: '2018-02-02T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-02T10:00:00.000+01:00',
            end_time: '2018-02-02T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-02T15:00:00.000+01:00',
            end_time: '2018-02-02T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-02T17:00:00.000+01:00',
            end_time: '2018-02-02T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-05T15:00:00.000+01:00',
            end_time: '2018-02-05T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-06T15:00:00.000+01:00',
            end_time: '2018-02-06T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-07T10:00:00.000+01:00',
            end_time: '2018-02-07T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-07T10:00:00.000+01:00',
            end_time: '2018-02-07T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-07T15:00:00.000+01:00',
            end_time: '2018-02-07T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-08T15:00:00.000+01:00',
            end_time: '2018-02-08T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-09T09:00:00.000+01:00',
            end_time: '2018-02-09T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-02-09T10:00:00.000+01:00',
            end_time: '2018-02-09T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-09T10:00:00.000+01:00',
            end_time: '2018-02-09T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-09T15:00:00.000+01:00',
            end_time: '2018-02-09T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-09T17:00:00.000+01:00',
            end_time: '2018-02-09T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-12T15:00:00.000+01:00',
            end_time: '2018-02-12T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-13T15:00:00.000+01:00',
            end_time: '2018-02-13T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-14T10:00:00.000+01:00',
            end_time: '2018-02-14T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-14T10:00:00.000+01:00',
            end_time: '2018-02-14T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-14T15:00:00.000+01:00',
            end_time: '2018-02-14T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-15T15:00:00.000+01:00',
            end_time: '2018-02-15T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-16T09:00:00.000+01:00',
            end_time: '2018-02-16T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-02-16T10:00:00.000+01:00',
            end_time: '2018-02-16T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-16T10:00:00.000+01:00',
            end_time: '2018-02-16T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-16T15:00:00.000+01:00',
            end_time: '2018-02-16T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-16T17:00:00.000+01:00',
            end_time: '2018-02-16T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-19T15:00:00.000+01:00',
            end_time: '2018-02-19T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-20T15:00:00.000+01:00',
            end_time: '2018-02-20T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-21T10:00:00.000+01:00',
            end_time: '2018-02-21T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-21T10:00:00.000+01:00',
            end_time: '2018-02-21T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-21T15:00:00.000+01:00',
            end_time: '2018-02-21T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-22T15:00:00.000+01:00',
            end_time: '2018-02-22T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-23T09:00:00.000+01:00',
            end_time: '2018-02-23T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-02-23T10:00:00.000+01:00',
            end_time: '2018-02-23T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-23T10:00:00.000+01:00',
            end_time: '2018-02-23T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-23T15:00:00.000+01:00',
            end_time: '2018-02-23T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-23T17:00:00.000+01:00',
            end_time: '2018-02-23T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-26T15:00:00.000+01:00',
            end_time: '2018-02-26T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-27T15:00:00.000+01:00',
            end_time: '2018-02-27T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-02-28T10:00:00.000+01:00',
            end_time: '2018-02-28T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-28T10:00:00.000+01:00',
            end_time: '2018-02-28T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-02-28T15:00:00.000+01:00',
            end_time: '2018-02-28T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-01T15:00:00.000+01:00',
            end_time: '2018-03-01T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-03-02T09:00:00.000+01:00',
            end_time: '2018-03-02T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-03-02T10:00:00.000+01:00',
            end_time: '2018-03-02T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-02T10:00:00.000+01:00',
            end_time: '2018-03-02T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-02T15:00:00.000+01:00',
            end_time: '2018-03-02T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-02T17:00:00.000+01:00',
            end_time: '2018-03-02T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-05T15:00:00.000+01:00',
            end_time: '2018-03-05T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-03-06T15:00:00.000+01:00',
            end_time: '2018-03-06T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-03-07T10:00:00.000+01:00',
            end_time: '2018-03-07T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-07T10:00:00.000+01:00',
            end_time: '2018-03-07T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-07T15:00:00.000+01:00',
            end_time: '2018-03-07T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-08T15:00:00.000+01:00',
            end_time: '2018-03-08T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-03-09T09:00:00.000+01:00',
            end_time: '2018-03-09T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-03-09T10:00:00.000+01:00',
            end_time: '2018-03-09T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-09T10:00:00.000+01:00',
            end_time: '2018-03-09T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-09T15:00:00.000+01:00',
            end_time: '2018-03-09T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-09T17:00:00.000+01:00',
            end_time: '2018-03-09T18:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-12T15:00:00.000+01:00',
            end_time: '2018-03-12T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-03-13T15:00:00.000+01:00',
            end_time: '2018-03-13T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-03-14T10:00:00.000+01:00',
            end_time: '2018-03-14T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-14T10:00:00.000+01:00',
            end_time: '2018-03-14T12:30:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-14T15:00:00.000+01:00',
            end_time: '2018-03-14T17:45:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-15T15:00:00.000+01:00',
            end_time: '2018-03-15T18:00:00.000+01:00',
            motive_ids: [
              738,
              738,
              824,
            ],
          },
          {
            start_time: '2018-03-16T09:00:00.000+01:00',
            end_time: '2018-03-16T09:30:00.000+01:00',
            motive_ids: [
              401,
            ],
          },
          {
            start_time: '2018-03-16T10:00:00.000+01:00',
            end_time: '2018-03-16T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-16T10:00:00.000+01:00',
            end_time: '2018-03-16T12:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-16T15:00:00.000+01:00',
            end_time: '2018-03-16T17:00:00.000+01:00',
            motive_ids: [],
          },
          {
            start_time: '2018-03-16T17:00:00.000+01:00',
            end_time: '2018-03-16T18:00:00.000+01:00',
            motive_ids: [],
          },
        ],
      }]);
    instance.availableSlots.get({
      agenda_id: 112,
      end_date: '2018-03-18',
      start_date: '2018-01-18',
    })
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });
});
