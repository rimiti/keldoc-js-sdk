// @flow
import moment from 'moment';
import {MissingMandatoryParameter, InvalidDatetimeFormat} from './exceptions';
import type {fetchAvailabilitiesRequest, fetchAvailableSlotsRequest} from './types';

export default class Validation {
  /**
   * @description Appointment validators.
   * @param params
   * @return {Promise<any>}
   */
  static validateCreateAppointment(params: { start_at: string }): Promise<any> {
    const requiredParams = ['start_at', 'agenda_id', 'state'];
    return Validation.validateMandatoryParams(requiredParams, params).then(() => {
      if (!Validation.datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
    });
  }

  /**
   * @description Appointment validators.
   * @param params
   * @return {Promise<any>}
   */
  static validateUpdateAppointment(params: { start_at: string }): Promise<any> {
    const requiredParams = ['start_at', 'agenda_id'];
    return Validation.validateMandatoryParams(requiredParams, params).then(() => {
      if (!Validation.datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
    });
  }

  /**
   * @description Availabilities validators.
   * @param params
   * @return {Promise<any>}
   */
  static validateFetchAvailabilities(params: fetchAvailabilitiesRequest): Promise<any> {
    const requiredParams = ['motive_id', 'start_date', 'end_date'];
    return Validation.validateMandatoryParams(requiredParams, params).then(() => {
      if (!Validation.datetimeFormat(params.start_date)) throw new InvalidDatetimeFormat();
      if (!Validation.datetimeFormat(params.end_date)) throw new InvalidDatetimeFormat();
    });
  }

  /**
   * @description Available slots validator.
   * @param params
   * @return {Promise<any>}
   */
  static validateFetchAvailableSlots(params: fetchAvailableSlotsRequest): Promise<any> {
    const requiredParams = ['agenda_id', 'start_date', 'end_date'];
    return Validation.validateMandatoryParams(requiredParams, params).then(() => {
      if (!Validation.datetimeFormat(params.start_date)) throw new InvalidDatetimeFormat();
      if (!Validation.datetimeFormat(params.end_date)) throw new InvalidDatetimeFormat();
    });
  }

  /**
   * @description Webhook validators.
   * @param params
   * @return {Promise<any>}
   */
  static validateCreateWebhook(params: {}): Promise<any> {
    const requiredParams = ['url'];
    return Validation.validateMandatoryParams(requiredParams, params);
  }

  /**
   * @description Validate mandatory parameters.
   * @param mandatoryParams
   * @param requestObj
   * @return {Promise<any>}
   */
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

  /**
   * @description Check if datetime format is right.
   * @param datetime
   * @return {boolean}
   */
  static datetimeFormat(datetime: string): boolean {
    return moment(datetime, moment.ISO_8601, true).isValid();
  }
}
