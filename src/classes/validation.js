// @flow
import moment from 'moment';
import {MissingMandatoryParameter, InvalidDatetimeFormat} from './exceptions';
import type {fetchAvailabilitiesRequest} from './types';

export default class Validation {
  validateMandatoryParams: Function;
  datetimeFormat: Function;

  // appointment validators
  static validateCreateAppointment(params: { start_at: string }): Promise<any> {
    const requiredParams = ['start_at', 'agenda_id', 'state'];
    return Validation.validateMandatoryParams(requiredParams, params).then(() => {
      if (!Validation.datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
    });
  }

  static validateUpdateAppointment(params: { start_at: string }): Promise<any> {
    const requiredParams = ['start_at', 'agenda_id'];
    return Validation.validateMandatoryParams(requiredParams, params).then(() => {
      if (!Validation.datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
    });
  }

  // availabilities validators
  static validateFetchAvailabilities(params: fetchAvailabilitiesRequest): Promise<any> {
    const requiredParams = ['motive_id', 'start_date', 'end_date'];
    return Validation.validateMandatoryParams(requiredParams, params).then(() => {
      if (!Validation.datetimeFormat(params.start_date)) throw new InvalidDatetimeFormat();
      if (!Validation.datetimeFormat(params.end_date)) throw new InvalidDatetimeFormat();
    });
  }

  // webhook validators
  static validateCreateWebhook(params: {}): Promise<any> {
    const requiredParams = ['url'];
    return Validation.validateMandatoryParams(requiredParams, params);
  }

  static validateMandatoryParams(mandatoryParams: Array<string>, requestObj: {}): Promise<any> {
    return new Promise((resolve) => {
      const requestKeys = Object.keys(requestObj);
      const missingParams = mandatoryParams.filter((attribute) => requestKeys.indexOf(attribute) < 0);
      if (missingParams.length > 0) {
        throw new MissingMandatoryParameter(`Parameter(s) ${JSON.stringify(missingParams)} missing`);
      }
      resolve(true);
    });
  }

  static datetimeFormat(datetime: string): boolean {
    return moment(datetime, moment.ISO_8601, true).isValid();
  }
}
