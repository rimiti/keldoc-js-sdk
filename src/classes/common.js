// @flow
import axios from 'axios';

export default class Common {
  options: {'Content-Type': string};
  constructor(configuration: {}) {
    this.configuration = configuration;
    this.options = {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/vnd.keldoc-v1+json',
        'authorization': this.configuration.auth_token,
      },
    };
  }

  get(url: string) : Promise<Object> {
    return new Promise((resolve, reject) => {
      axios.get(url, this.options)
        .then((response) => { this.httpStatus(response); })
        .then((response) => { resolve(response); })
        .catch((error) => {
          reject(error);
        });
    });
  }

  post(url: string, body: {}) : Promise<Object> {
    return new Promise((resolve, reject) => {
      axios.post(url, body, this.options)
       .then((response) => { this.httpStatus(response); })
        .then((response) => { resolve(response); })
        .catch((error) => {
          reject(error);
        });
    });
  }

  put(url: string, body: {}) : Promise<Object> {
    return new Promise((resolve, reject) => {
      axios.put(url, body, this.options)
        .then((response) => { this.httpStatus(response); })
        .then((response) => { resolve(response); })
        .catch((error) => {
          reject(error);
        });
    });
  }

  delete(url: string, body: {}) : Promise<Object> {
    return new Promise((resolve, reject) => {
      axios.get(url, body, this.options)
        .then((response) => { this.httpStatus(response); })
        .then((response) => { resolve(response); })
        .catch((error) => {
          reject(error);
        });
    });
  }

  httpStatus(response) : void {
    return new Promise((resolve) => {
      if (response.status === 400 ) throw new BadRequest();
      else if (response.status === 401) throw new Unauthorized();
      else if (response.status === 402) throw new OverQuota();
      else if (response.status === 404) throw new NotFound();
      else if (response.status === 406) throw new NotAcceptable();
      else if (response.status === 422) throw new ValidationError();
      else if (response.status >= 500) throw new InternalError();
    });
  }
}
