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
} from './exceptions';

export default class Common {
  httpStatus: Function;
  validator: Validation;
  configuration: Config
  options: {};
  constructor(configuration: Config) {
    this.validator = new Validation();
    this.configuration = configuration;
    this.options = {
      headers: {
        'content-type': 'application/json',
        accept: 'application/vnd.keldoc-v1+json',
        authorization: this.configuration.auth_token,
      },
      validateStatus: (status) => Common.httpStatus(status),
    };
  }

  get(url: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(this.configuration.host + url, this.options)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  post(url: string, body: {}) : Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post(this.configuration.host + url, body, this.options)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  put(url: string, body: {}) : Promise<any> {
    return new Promise((resolve, reject) => {
      axios.put(this.configuration.host + url, body, this.options)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  delete(url: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      axios.delete(this.configuration.host + url, this.options)
        .then((response: {}) => resolve(response))
        .catch((error) => reject(error));
    });
  }

  static httpStatus(status) : Promise<any> {
    return new Promise((resolve) => {
      if (status === 400) throw new BadRequest();
      else if (status === 401) throw new Unauthorized();
      else if (status === 402) throw new OverQuota();
      else if (status === 404) throw new NotFound();
      else if (status === 406) throw new NotAcceptable();
      else if (status === 422) throw new ValidationError();
      else if (status >= 500) throw new InternalError();
      resolve(status);
    });
  }
}
