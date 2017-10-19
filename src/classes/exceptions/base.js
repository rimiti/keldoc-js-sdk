// @flow
export default class Exception {
  ename: string;
  emessage: string;

  get name(): string {
    return this.ename;
  }

  set name(value: string) {
    this.ename = value;
  }

  get message(): string {
    return this.emessage;
  }

  set message(value: string) {
    this.emessage = value;
  }
}
