// @flow
import SDK from '../classes';

const configuration = {
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
  create: function create(): SDK {
    return new SDK(configuration);
  },
};
