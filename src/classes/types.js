// @flow
export type Config = {
  host: string,
  auth_token: string,
  routes: {
    availabilities: string,
    availableSlots: string,
    agendas: string,
    config: string,
    motives: string,
    patients: string,
    specialties: string,
    configWebhooks: string,
    appointments: string,
  }
}

export type fetchAvailabilitiesRequest = {
  motive_id: string,
  start_date: string,
  end_date: string,
}

export type fetchAvailableSlotsRequest = {
  agenda_id: string,
  start_date: string,
  end_date: string,
}

export type fetchMotivesRequest = {
  full_details?: boolean,
}
