// @flow
import Exception from './base'

export default class InvalidDatetimeFormat extends Exception {

  constructor(message) {
    super()
    this.name = this.constructor.name
    this.message = message || `Invalid datetime format (ISO_8601 format required)`
  }

}
