// @flow
export default class Exception {
  ename: string;
  emessage: string;

  constructor() {
    this.ename = this.constructor.name;
  }

  get name(): string {
    return this.ename;
  }

  get message(): string {
    return this.emessage;
  }

  set message(value: string) {
    this.emessage = value;
  }
}
