// @flow
import axios from 'axios';
import Validation from './validation';
import type {Config} from './types';
import {
  BadRequest,
  Unauthorized,
  OverQuota,
  NotFound,
  NotAcceptable,
  ValidationError,
  InternalError,
  UnknownError,
} from './exceptions';

export default class Common {
  validator: Validation;
  configuration: Config;
  options: {};

  constructor(configuration: Config) {
    this.validator = new Validation();
    this.configuration = configuration;
    axios.defaults.headers.common = {
      Authorization: this.configuration.auth_token,
      Accept: 'application/vnd.keldoc-v1+json',
      'Content-Type': 'application/json',
    };
  }

  /**
   * @description Runs GET request.
   * @param url
   * @param body
   * @return {Promise}
   */
  getRequest(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(this.configuration.host + url, body)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(Common.httpStatus(error.response)));
    });
  }

  /**
   * @description Runs POST request.
   * @param url
   * @param body
   * @return {Promise}
   */
  postRequest(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post(this.configuration.host + url, body)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(Common.httpStatus(error.response)));
    });
  }

  /**
   * @description Runs PUT request.
   * @param url
   * @param body
   * @return {Promise}
   */
  putRequest(url: string, body: any): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.put(this.configuration.host + url, body)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(Common.httpStatus(error.response)));
    });
  }

  /**
   * @description Runs DELETE request.
   * @param url
   * @return {Promise}
   */
  deleteRequest(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.delete(this.configuration.host + url)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(Common.httpStatus(error.response)));
    });
  }

  /**
   * @description Returns exception for non 2xx http codes.
   * @param response
   * @return {*}
   */
  static httpStatus(response): any {
    if (response.status === 400) return new BadRequest();
    else if (response.status === 401) return new Unauthorized();
    else if (response.status === 402) return new OverQuota();
    else if (response.status === 404) return new NotFound();
    else if (response.status === 406) return new NotAcceptable();
    else if (response.status === 422) return new ValidationError();
    else if (response.status === 500) return new InternalError();
    return new UnknownError();
  }
}
