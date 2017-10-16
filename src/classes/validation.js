import {MissingMandatoryParameter, InvalidDatetimeFormat} from './exceptions'
import moment from 'moment'

export default class Validation {

  //appointment validators
  validateCreateAppointment(params: {}) {
    const required_params = ['start_at', 'agenda_id', 'state'];
    this.validateMandatoryParams(required_params, params);
    if (!this._datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
  }

  validateUpdateAppointment(params: {}) {
    const required_params = ['start_at', 'agenda_id']
    this.validateMandatoryParams(required_params, params);
    if (!this._datetimeFormat(params.start_at)) throw new InvalidDatetimeFormat();
  }

  //availabilities validators
  validateFetchAvailabilities(params: {}) {
    const required_params = ['motive_id']
    this.validateMandatoryParams(required_params, params);
    if (!this._datetimeFormat(params.start_date)) throw new InvalidDatetimeFormat();
    if (!this._datetimeFormat(params.end_date)) throw new InvalidDatetimeFormat();
  }
  //webhook validators
  validateCreateWebhook(params: {}) {
    const required_params = ['url']
    this.validateMandatoryParams(required_params, params);
  }

  validateMandatoryParams(mandatory_params: Array< string >, request_obj: {}) {
    const request_keys = Object.keys(request_obj);
    const missing_params = mandatory_params.filter((attribute) =>  { return request_keys.indexOf(attribute) < 0 });
    if (missing_params.length > 0) throw new MissingMandatoryParameter(`Parameter(s) ${JSON.stringify(missing_params)} missing`);
  }

  _datetimeFormat(datetime) {
    return moment(datetime, moment.ISO_8601, true).isValid();
  }

}
