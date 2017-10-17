// @flow
export type Config = {
  host: string,
  auth_token: string,
  routes: {
    availabilities: string,
    agendas: string,
    config: string,
    motives: string,
    patients: string,
    specialties: string,
    webhooks: string,
    appointments: string,
  }
}

