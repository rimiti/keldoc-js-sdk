// @flow
import axios from 'axios';
import BadRequest from './exceptions/bad_request';

export default class Common {
  static send(body: {}) {
    axios.post('/', body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    if (400) throw new BadRequest();
  }
}
