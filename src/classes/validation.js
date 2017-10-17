// @flow
import moment from 'moment';
import {MissingMandatoryParameter, InvalidDatetimeFormat} from './exceptions';

export default class Validation {
  validateMandatoryParams: Function;
  datetimeFormat: Function;

  // appointment validators
  static validateCreateAppointment(params: { start_at: string }) {
    const requiredParams = ['start_at', 'agenda_id', 'state'];
    Validation.validateMandatoryParams(requiredParams, params);
    if (!Validation.datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
  }

  static validateUpdateAppointment(params: { start_at: string }) {
    const requiredParams = ['start_at', 'agenda_id'];
    Validation.validateMandatoryParams(requiredParams, params);
    if (!Validation.datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
  }

  // availabilities validators
  static validateFetchAvailabilities(params: { start_date: string, end_date: string }) {
    const requiredParams = ['motive_id'];
    Validation.validateMandatoryParams(requiredParams, params);
    if (!Validation.datetimeFormat(params.start_date)) throw new InvalidDatetimeFormat();
    if (!Validation.datetimeFormat(params.end_date)) throw new InvalidDatetimeFormat();
  }

  // webhook validators
  static validateCreateWebhook(params: {}) {
    const requiredParams = ['url'];
    Validation.validateMandatoryParams(requiredParams, params);
  }

  static validateMandatoryParams(mandatoryParams: Array<string>, requestObj: {}): void {
    const requestKeys = Object.keys(requestObj);
    const missingParams = mandatoryParams.filter((attribute) => requestKeys.indexOf(attribute) < 0);
    if (missingParams.length > 0) {
      throw new MissingMandatoryParameter(`Parameter(s) ${JSON.stringify(missingParams)} missing`);
    }
  }

  static datetimeFormat(datetime: string) {
    return moment(datetime, moment.ISO_8601, true).isValid();
  }
}
