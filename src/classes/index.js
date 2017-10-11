// @flow
import Agenda from './agenda';

export default class SDK {
  configuration: Object;
  agendaClass: Agenda;

  constructor(configuration: {}) {
    this.configuration = configuration;
  }

  get agenda(): Agenda {
    if (!this.agendaClass) {
      this.agendaClass = new Agenda(this.configuration);
    }
    return this.agendaClass;
  }
}
