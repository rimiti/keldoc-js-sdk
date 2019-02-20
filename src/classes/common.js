// @flow
import axios from 'axios';
import * as crypto from 'crypto-js';
import momentTimezone from 'moment-timezone';
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

  headerContentType: string;

  headerDate: string;

  constructor(configuration: Config) {
    this.validator = new Validation();
    this.headerContentType = 'application/json';
    this.headerDate = '';
    this.configuration = configuration;
  }

  /**
   * @description Generate a token for each requests.
   * @returns {void}
   */
  generateHeader() {
    axios.defaults.headers.common = {
      Authorization: this.generateToken(this.configuration.credentials),
      Accept: 'application/vnd.keldoc-v1+json',
      'Content-Type': this.headerContentType,
      Date: this.headerDate,
    };
  }

  /**
   * @description Generate token from credentials.
   * @param credentials
   * @returns {string}
   */
  generateToken(credentials: {clientAccessKeyId: string, secretAccessKeyId: string}): string {
    this.headerDate = momentTimezone().tz('Europe/Paris').format();
    const message = `${this.headerDate},${this.headerContentType}`;
    const signature = crypto.enc.Base64.stringify(crypto.HmacSHA256(message, credentials.secretAccessKeyId));
    return `Bearer ${credentials.clientAccessKeyId}:${signature}`.replace(/[^A-Za-z0-9=:\s]/g, '');
  }

  /**
   * @description Runs GET request.
   * @param url
   * @param options
   * @return {Promise}
   */
  getRequest(url: string, options: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.generateHeader();
      axios.get(this.configuration.host + url, options)
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
      this.generateHeader();
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
      this.generateHeader();
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
      this.generateHeader();
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
  static httpStatus(response: { status: number }): any {
    if (response.status === 400) return new BadRequest();
    if (response.status === 401) return new Unauthorized();
    if (response.status === 402) return new OverQuota();
    if (response.status === 404) return new NotFound();
    if (response.status === 406) return new NotAcceptable();
    if (response.status === 422) return new ValidationError();
    if (response.status === 500) return new InternalError();
    return new UnknownError();
  }
}
