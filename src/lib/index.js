// @flow
import SDK from '../classes';

const configuration = {
  auth_token: '1wxcvdfgdfgdfgdfg2131454sdf',
  host: 'http://www.example.com',
  routes: {
    agendas: {
      ressourceUrl: '/agendas.json',
    },
    appointments: {
      ressourceUrl: '/appointments',
    },
    availabilities: {
      ressourceUrl: '/availabilities',
    },
    motives: {
      ressourceUrl: '/motives.json',
    },
    patients: {
      ressourceUrl: '/patients',
    },
    specialties: {
      ressourceUrl: '/specialties',
    },
  },
};

module.exports = {
  create: function create(): SDK {
    return new SDK(configuration);
  },
};
