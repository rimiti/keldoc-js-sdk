// @flow
import Agendas from './resources/agendas';
import Appointments from './resources/appointments';
import Availabilities from './resources/availabilities';
import AvailableSlots from './resources/available_slots';
import Motives from './resources/motives';
import Patients from './resources/patients';
import Specialties from './resources/specialities';
import Config from './resources/config';
import ConfigWebhooks from './resources/config/webhooks';

export default class SDK {
  configuration: Object;
  agendasClass: Agendas;
  appointmentsClass: Appointments;
  availabilitiesClass: Availabilities;
  motivesClass: Motives;
  patientsClass: Patients;
  specialtiesClass: Specialties;
  configClass: Config;
  configWebhooksClass: ConfigWebhooks;
  availableSlotsClass: AvailableSlots;

  constructor(configuration: {}) {
    this.configuration = configuration;
  }

  /**
   * @description Returns Agendas singleton.
   * @return {Agendas}
   */
  get agendas(): Agendas {
    if (!this.agendasClass) {
      this.agendasClass = new Agendas(this.configuration);
    }
    return this.agendasClass;
  }

  /**
   * @description Returns Appointments singleton.
   * @return {Appointments}
   */
  get appointments(): Appointments {
    if (!this.appointmentsClass) {
      this.appointmentsClass = new Appointments(this.configuration);
    }
    return this.appointmentsClass;
  }

  /**
   * @description Returns Availabilities singleton.
   * @return {Availabilities}
   */
  get availabilities(): Availabilities {
    if (!this.availabilitiesClass) {
      this.availabilitiesClass = new Availabilities(this.configuration);
    }
    return this.availabilitiesClass;
  }

  /**
   * @description Returns AvailableSlots singleton.
   * @return {AvailableSlots}
   */
  get availableSlots(): AvailableSlots {
    if (!this.availableSlotsClass) {
      this.availableSlotsClass = new AvailableSlots(this.configuration);
    }
    return this.availableSlotsClass;
  }

  /**
   * @description Returns Motives singleton.
   * @return {Motives}
   */
  get motives(): Motives {
    if (!this.motivesClass) {
      this.motivesClass = new Motives(this.configuration);
    }
    return this.motivesClass;
  }

  /**
   * @description Returns Patients singleton.
   * @return {Patients}
   */
  get patients(): Patients {
    if (!this.patientsClass) {
      this.patientsClass = new Patients(this.configuration);
    }
    return this.patientsClass;
  }

  /**
   * @description Returns Specialties singleton.
   * @return {Specialties}
   */
  get specialties(): Specialties {
    if (!this.specialtiesClass) {
      this.specialtiesClass = new Specialties(this.configuration);
    }
    return this.specialtiesClass;
  }

  /**
   * @description Returns Config singleton.
   * @return {Config}
   */
  get config(): Config {
    if (!this.configClass) {
      this.configClass = new Config(this.configuration);
    }
    return this.configClass;
  }

  /**
   * @description Returns ConfigWebhooks singleton.
   * @return {ConfigWebhooks}
   */
  get configWebhooks(): ConfigWebhooks {
    if (!this.configWebhooksClass) {
      this.configWebhooksClass = new ConfigWebhooks(this.configuration);
    }
    return this.configWebhooksClass;
  }
}
