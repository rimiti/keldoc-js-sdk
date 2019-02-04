// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../../src';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Appointments', () => {
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
    mock.onPost('http://www.example.com/partners/appointments').reply(200);
    return Promise.all([
      instance.appointments,
      instance.appointments,
    ])
      .then((instances) => {
        expect(instances[0] === instances[1]);
        return Promise.all([
          instances[0].create({start_at: '2001-09-23', agenda_id: '2135', state: 'true'}),
          instances[1].create({start_at: '2001-09-23', agenda_id: '2135', state: 'true'}),
        ]);
      })
      .then((requests) => {
        expect(requests[0].status).toEqual(200);
        expect(requests[1].status).toEqual(200);
        done();
      });
  });

  it('POST', (done) => {
    mock.onPost('http://www.example.com/partners/appointments', {start_at: '2001-09-23', agenda_id: '2135', state: 'true'})
      .reply(200, {
        start_at: '2017-09-18T17:30:00.000+02:00',
        duration: 1800,
        state: 'confirmed',
        agenda_id: 552,
        patient_comment: 'Merci',
        motive_id: 366,
        skip_sms_confirmation: true,
        skip_sms_reminder: true,
        patient_attributes: {
          first_name: 'Julien',
          last_name: 'Flandrin',
          birth_date: '2001-09-23',
          email: 'julien@keldoc.com',
          phone: '0677889944',
          gender: 'm',
          street: '4 rue du Boc',
          city: 'Paris',
          zipcode: '75007',
        },
      });
    instance.appointments.create({start_at: '2001-09-23', agenda_id: '2135', state: 'true'})
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });

  it('PUT', (done) => {
    mock.onPut('http://www.example.com/partners/appointments/21354', {start_at: '2001-09-23', agenda_id: '2135'})
      .reply(200, {
        start_at: '2017-09-18T17:30:00.000+02:00',
        duration: 1800,
        state: 'confirmed',
        agenda_id: 552,
        patient_comment: 'Merci',
        motive_id: 366,
        skip_sms_confirmation: true,
        skip_sms_reminder: true,
        patient_attributes: {
          first_name: 'Julien',
          last_name: 'Flandrin',
          birth_date: '2001-09-23',
          email: 'julien@keldoc.com',
          phone: '0677889944',
          gender: 'm',
          street: '4 rue du Boc',
          city: 'Paris',
          zipcode: '75007',
        },
      });
    instance.appointments.update(21354, {start_at: '2001-09-23', agenda_id: '2135'})
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });

  it('DELETE', (done) => {
    mock.onDelete('http://www.example.com/partners/appointments/21321').reply(200);
    instance.appointments.remove(21321)
      .then((response) => {
        expect(response.status).toEqual(200);
        done();
      });
  });
});
