// @flow
import * as sdk from '../src/lib';
import {MissingMandatoryParameter, InvalidDatetimeFormat} from '../src/classes/exceptions';

let instance = {};
jest.setTimeout(10000);

describe('Validation exceptions', () => {
  beforeAll((done) => {
    instance = sdk.create();
    done();
  });
  it('should throws missing mandatory parameters exception when some request param not provided', (done) => {
    instance.appointments.create({agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(MissingMandatoryParameter);
        expect(e.name).toEqual('MissingMandatoryParameter');
        expect(e.message).toEqual('Parameter(s) ["start_at"] missing');
        done();
      });
  });
  it('should throws invalidate date exception when creating appointment with invalid start_at format', (done) => {
    instance.appointments.create({start_at: 'xxx', agenda_id: '2135', state: 'true'})
      .catch((e) => {
        expect(e).toBeInstanceOf(InvalidDatetimeFormat);
        expect(e.name).toEqual('InvalidDatetimeFormat');
        expect(e.message).toEqual('Invalid datetime format (ISO_8601 format required)');
        done();
      });
  });
  it('should throws invalidate date exception when updating appointment with invalid start_at format', (done) => {
    instance.appointments.update(21354, {start_at: 'xxx', agenda_id: '2135'})
      .catch((e) => {
        expect(e).toBeInstanceOf(InvalidDatetimeFormat);
        expect(e.name).toEqual('InvalidDatetimeFormat');
        expect(e.message).toEqual('Invalid datetime format (ISO_8601 format required)');
        done();
      });
  });
  it('should throws invalidate date exception when fetching availabilities with invalid dates format', (done) => {
    instance.availabilities.get({
      agenda_ids: 112,
      end_date: '2017-09-18',
      start_date: 'xxxx',
      motive_id: '366',
    })
      .catch((e) => {
        expect(e).toBeInstanceOf(InvalidDatetimeFormat);
        expect(e.name).toEqual('InvalidDatetimeFormat');
        expect(e.message).toEqual('Invalid datetime format (ISO_8601 format required)');
        done();
      });

    instance.availabilities.get({
      agenda_ids: 112,
      end_date: 'xxx',
      start_date: '2017-09-18',
      motive_id: '366',
    })
      .catch((e) => {
        expect(e).toBeInstanceOf(InvalidDatetimeFormat);
        expect(e.name).toEqual('InvalidDatetimeFormat');
        expect(e.message).toEqual('Invalid datetime format (ISO_8601 format required)');
        done();
      });
  });
  it('should get default message of MissingMandatoryParameter when not message is specified', () => {
    expect(() => {
      throw new MissingMandatoryParameter();
    }).toThrow(MissingMandatoryParameter);
  });
});
