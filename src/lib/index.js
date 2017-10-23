// @flow
import jsonOverride from 'json-override';
import SDK from '../classes';
import type {Config} from '../classes/types';

let configuration = {
  auth_token: '165416s5dfsds564sfdf2df',
  host: 'http://www.example.com',
  routes: {
    agendas: '/agendas.json',
    appointments: '/appointments',
    availabilities: '/availabilities',
    motives: '/motives.json',
    patients: '/patients',
    specialties: '/specialties',
    config: '/config',
    webhooks: '/config/webhooks',
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
