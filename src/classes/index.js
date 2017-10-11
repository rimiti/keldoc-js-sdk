// @flow
import Agenda from './agenda';

export default class SDK {
  configuration : Object;
  agendaSDK : Agenda;
  constructor(configuration : {}) {
    this.configuration = configuration;
  }
  get agenda() : Agenda {
    if (!this.agendaSDK) {
      this.agendaSDK = new Agenda();
    }
    return this.agendaSDK;
  }
}
