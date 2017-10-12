// @flow
import Agendas from './agendas';
import Appointments from './appointments';
import Availabilities from './availabilities';
import Motives from './motives';
import Patients from './patients';
import Specialties from './specialties';

export default class SDK {
  configuration: Object;
  agendasClass: Agendas;
  appointmentsClass: Appointments;
  availabilitiesClass: Availabilities;
  motivesClass: Motives;
  patientsClass: Patients;
  specialtiesClass: Specialties;

  constructor(configuration: {}) {
    this.configuration = configuration;
  }

  get agendas(): Agendas {
    if (!this.agendasClass) {
      this.agendasClass = new Agendas(this.configuration);
    }
    return this.agendasClass;
  }

  get appointments(): Appointments {
    if (!this.appointmentsClass) {
      this.appointmentsClass = new appointmentsClass(this.configuration);
    }
    return this.appointmentsClass;
  }

  get availabilities(): Availabilities {
    if (!this.availabilitiesClass) {
      this.availabilitiesClass = new availabilitiesClass(this.configuration);
    }
    return this.availabilitiesClass;
  }

  get motives(): Motives {
    if (!this.motivesClass) {
      this.motivesClass = new motivesClass(this.configuration);
    }
    return this.motivesClass;
  }

  get patients(): Patients {
    if (!this.patientsClass) {
      this.patientsClass = new patientsClass(this.configuration);
    }
    return this.patientsClass;
  }

  get specialties(): Specialties {
    if (!this.specialtiesClass) {
      this.specialtiesClass = new specialtiesClass(this.configuration);
    }
    return this.specialtiesClass;
  }
}
