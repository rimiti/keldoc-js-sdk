// @flow
import jsonOverride from 'json-override';
import SDK from './classes';
import type {Config} from './classes/types';

let configuration = {
  auth_token: '165416s5dfsds564sfdf2df',
  host: 'http://www.example.com',
  routes: {
    agendas: '/agendas',
    appointments: '/appointments',
    availabilities: '/availabilities',
    availableSlots: '/available_slots',
    motives: '/motives',
    patients: '/patients',
    specialties: '/specialties',
    config: '/config',
    configWebhooks: '/config/webhooks',
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
