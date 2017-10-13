// @flow
import SDK from '../classes';

const configuration = {
  auth_token: '165416s5dfsds564sfdf2df',
  host: 'http://www.example.com',
  routes: {
    agendas: {
      ressourceUrl: 'agendas.json',
    },
    appointments: {
      ressourceUrl: 'appointments',
    },
    availabilities: {
      ressourceUrl: 'availabilities',
    },
    motives: {
      ressourceUrl: 'motives.json',
    },
    patients: {
      ressourceUrl: 'patients',
    },
    specialties: {
      ressourceUrl: 'specialties',
    },
    config: {
      ressourceUrl: 'config',
    },
    webhooks: {
      ressourceUrl: 'config/webhooks',
    },
  },
};

module.exports = {
  create: function create(): SDK {
    return new SDK(configuration);
  },
};
