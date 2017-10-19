// @flow
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as sdk from '../../src/lib';

jest.setTimeout(10000);
let instance = {};
const mock = new MockAdapter(axios);

describe('Appointments', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });

  afterEach(() => mock.reset());

  it('POST', (done) => {
    mock.onPost('http://www.example.com/appointments', {start_at: '2001-09-23', agenda_id: '2135', state: 'true'})
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
    instance.appointments.create({start_at: '2001-09-23', agenda_id: '2135', state: 'true'}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });

    // lazy loading apointements test
    instance.appointments.create({start_at: '2001-09-23', agenda_id: '2135', state: 'true'}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });

  it('PUT', (done) => {
    mock.onPut('http://www.example.com/appointments/21354.json', {start_at: '2001-09-23', agenda_id: '2135'})
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
    instance.appointments.update(21354, {start_at: '2001-09-23', agenda_id: '2135'}).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });

  it('DELETE', (done) => {
    mock.onDelete('http://www.example.com/appointments/21321.json').reply(200);
    instance.appointments.remove(21321).then((response) => {
      expect(response.status).toEqual(200);
      done();
    });
  });
});
