// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../src';
import {
  BadRequest,
  Unauthorized,
  OverQuota,
  NotFound,
  NotAcceptable,
  ValidationError,
  InternalError,
  UnknownError,
} from '../src/classes/exceptions';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('API Exceptions', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('should throw Bad Request exception when response status equal to 400', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '20010923', agenda_id: '2135', state: 'true'})
      .reply(400);
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(BadRequest);
        expect(e.name).toEqual('BadRequest');
        expect(e.message).toEqual('Bad request.');
        done();
      });
  });

  it('should throw Internal Error exception when response status equal to 500', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '20010923', agenda_id: '2135', state: 'true'})
      .reply(500);
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(InternalError);
        expect(e.name).toEqual('InternalError');
        expect(e.message).toEqual('An error occurred with our API.');
        done();
      });
  });

  it('should throw Over Quota exception when response status equal to 402', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '20010923', agenda_id: '2135', state: 'true'})
      .reply(402);
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(OverQuota);
        expect(e.name).toEqual('OverQuota');
        expect(e.message).toEqual('Over plan quota on this endpoint.');
        done();
      });
  });

  it('should throw Unauthorized exception when response status equal to 401', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '20010923', agenda_id: '2135', state: 'true'})
      .reply(401);
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(Unauthorized);
        expect(e.name).toEqual('Unauthorized');
        expect(e.message).toEqual('Your API key is invalid.');
        done();
      });
  });

  it('should throw Validation Error exception when response status equal to 422', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '20010923', agenda_id: '2135', state: 'true'})
      .reply(422);
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(ValidationError);
        expect(e.name).toEqual('ValidationError');
        expect(e.message).toEqual('A validation error occurred.');
        done();
      });
  });

  it('should throw Not Acceptable exception when response status equal to 406', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '20010923', agenda_id: '2135', state: 'true'})
      .reply(406);
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(NotAcceptable);
        expect(e.name).toEqual('NotAcceptable');
        expect(e.message)
          .toEqual(`The requested resource is capable of generating only content not acceptable according
    to the Accept headers sent in the request.`);
        done();
      });
  });

  it('should throw Not Found exception when response status equal to 404', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '2001-09-23', agenda_id: '2135', state: 'true'})
      .reply(404);
    instance.appointments.create({start_at: '20010923', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(NotFound);
        expect(e.name).toEqual('NotFound');
        expect(e.message).toEqual('The resource does not exist.');
        done();
      });
  });

  it('should throws Unknown error for get request', (done) => {
    mock.onGet('http://www.example.com/agendas.json').reply(100, [{id: 1, name: 'Dr. KelDoc test'}]);
    instance.agendas.get()
      .catch((e) => {
        expect(e).toBeInstanceOf(UnknownError);
        expect(e.name).toEqual('UnknownError');
        expect(e.message).toEqual('An unknown error occurred with API.');
        done();
      });
  });

  it('should throws Unknown error for put request', (done) => {
    mock.onPut('http://www.example.com/appointments/21354.json', {start_at: '2001-09-23', agenda_id: '2135'})
      .reply(100, {
        start_at: '2017-09-18T17:30:00.000+02:00',
        duration: 1800,
        state: 'confirmed',
        agenda_id: 552,
        patient_comment: 'Merci',
      });
    instance.appointments.update(21354, {start_at: '2001-09-23', agenda_id: '2135'})
      .catch((e) => {
        expect(e).toBeInstanceOf(UnknownError);
        expect(e.name).toEqual('UnknownError');
        expect(e.message).toEqual('An unknown error occurred with API.');
        done();
      });
  });

  it('should throws Unknown error for delete request', (done) => {
    mock.onDelete('http://www.example.com/config/webhooks').reply(100);
    instance.webhooks.remove()
      .catch((e) => {
        expect(e).toBeInstanceOf(UnknownError);
        expect(e.name).toEqual('UnknownError');
        expect(e.message).toEqual('An unknown error occurred with API.');
        done();
      });
  });
});
