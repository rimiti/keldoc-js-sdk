// @flow
import jsonOverride from 'json-override';
import SDK from './classes';
import type {Config} from './classes/types';

let configuration = {
  credentials: {
    clientAccessKeyId: '',
    secretAccessKeyId: '',
  },
  host: 'http://www.example.com',
  routes: {
    agendas: '/partners/agendas',
    appointments: '/partners/appointments',
    availabilities: '/partners/availabilities',
    availableSlots: '/partners/available_slots',
    motives: '/partners/motives',
    patients: '/partners/patients',
    specialties: '/partners/specialties',
    config: '/partners/config',
    configWebhooks: '/partners/config/webhooks',
  },
};

module.exports = {
  configure: function configure(config: Config) {
    configuration = jsonOverride(configuration, config);
  },
  create: function create(): SDK {
    return new SDK(configuration);
  },
};
