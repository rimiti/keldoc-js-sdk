# keldoc-js-sdk

[![Dependencies][prod-dependencies-badge]][prod-dependencies]
[![Coverage][coverage-badge]][coverage]
[![Build Status][travis-badge]][travis-ci]
[![MIT License][license-badge]][LICENSE]
[![PRs Welcome][prs-badge]][prs]


## Description

This module provides an Keldoc API implementation.

## Install
```
$ npm install @rimiti/keldoc-js-sdk --save
```

## Features

- Agendas
- Appointments
- Availabilities
- Available slots
- Config
- ConfigWebhooks
- Motives
- Patients
- Specialities

## Documentation

* [agenda.get()](#getAgendas)
* [appointments.create()](#createAppointment)
* [appointments.update()](#updateAppointment)
* [appointments.remove()](#removeAppointment)
* [availabilities.get()](#getAvailabilities)
* [availableSlots.get()](#getAvailableSlots)
* [config.get()](#getConfig)
* [motives.get()](#getMotives)
* [patients.create()](#createPatient)
* [patients.update()](#updatePatient)
* [specialties.get()](#getSpecialties)
* [configWebhooks.create()](#createConfigWebhooks)
* [configWebhooks.update()](#updateConfigWebhooks)
* [configWebhooks.remove()](#removeConfigWebhooks)

## Examples

Create your keldoc sdk by requiring it, making it's initial configuration and instantiating it.

**From import**
```javascript
import * as sdk from '@rimiti/keldoc-js-sdk'

sdk.configure({
  credentials: {
    clientAccessKeyId: 'CLIENT_ACCESS_KEY_ID',
    secretAccessKeyId: 'SECRET_ACCESS_KEY_ID',
  },
  host: 'http://www.example.com'
});

const keldoc = sdk.create()
```

**From require**
```javascript
const sdk = require('@rimiti/keldoc-js-sdk');

sdk.configure({
  credentials: {
    clientAccessKeyId: 'CLIENT_ACCESS_KEY_ID',
    secretAccessKeyId: 'SECRET_ACCESS_KEY_ID',
  },
  host: 'http://www.example.com',
  routes: {
    agendas: '/agendas.json',
    appointments: '/appointments',
    availabilities: '/availabilities',
    availableSlots: '/available_slots',
    motives: '/motives.json',
    patients: '/patients',
    specialties: '/specialties',
    config: '/config',
    configWebhooks: '/config/webhooks' },
});

const keldoc = sdk.create();
```

## API Methods

<a name="getAgendas"/>

### Agenda

* Fetch all agendas.

  __Function__

```javascript
    const response = await keldoc.agendas.get();
```

---------------------------------------

<a name="createAppointment"/>

### Appointments

* Create a new appointment

  __Arguments__

```javascript
    start_at                  {Datetime} start date (required).
    agenda_id                 {Integer} Agenda ID (required).
    state                     {String} 'confirmed' or 'canceled' (required).
    duration                  {Integer} duration in seconds.
    no_show                   {Boolean} patient hasn &apos; t come.
    patient_arrived           {Boolean} patient is waiting in the waiting room.
    no_show_excused           {Boolean} patient hasn &apos; t come but he excused.
    motive_id                 {Integer} motive id.
    skip_sms_confirmation     {Boolean} disable sms confirmation for consultation.
    skip_email_confirmation   {Boolean} disable email confirmation for consultation.
    skip_sms_reminder         {Boolean} disable sms reminder for consultation.
    skip_email_reminder       {Boolean} disable email reminder for consultation.
    patient_id                {Integer} patient ID.
    patient.first_name        {String} patient firstname.
    patient.last_name         {String} patient lastname.
    patient.maiden_name       {String} patient maiden name.
    patient.gender            {Char} 'm' or 'f'.
    patient.phone             {String} patient phone number.
    patient.phone2            {String} patient alternative phone number.
    patient.email             {String} patient email address.
    patient.street            {String} patient street number & streetnames.
    patient.city              {String} patient city name.
    patient.zipcode           {String} patient city zipcode.
```

```javascript
    const response = await keldoc.appointments.create({start_at: '2001-09-23', agenda_id: '2135', state: 'confirmed'});
```

<a name="updateAppointment"/>

* Update an existing appointment

  __Arguments__

```javascript
    id                        {Integer} KelDoc internal ID for appointment to update.
    start_at                  {Datetime} start date (required).
    agenda_id                 {Integer} Agenda ID (required).
    state                     {String} 'confirmed' or 'canceled' (required).
    duration                  {Integer} duration in seconds.
    no_show                   {Boolean} patient hasn &apos; t come.
    patient_arrived           {Boolean} patient is waiting in the waiting room.
    no_show_excused           {Boolean} patient hasn &apos; t come but he excused.
    motive_id                 {Integer} motive id.
    skip_sms_confirmation     {Boolean} disable sms confirmation for consultation.
    skip_email_confirmation   {Boolean} disable email confirmation for consultation.
    skip_sms_reminder         {Boolean} disable sms reminder for consultation.
    skip_email_reminder       {Boolean} disable email reminder for consultation.
    patient_id                {Integer} patient ID.
    patient.first_name        {String} patient firstname.
    patient.last_name         {String} patient lastname.
    patient.maiden_name       {String} patient maiden name.
    patient.gender            {Char} 'm' or 'f'.
    patient.phone             {String} patient phone number.
    patient.phone2            {String} patient alternative phone number.
    patient.email             {String} patient email address.
    patient.street            {String} patient street number & streetnames.
    patient.city              {String} patient city name.
    patient.zipcode           {String} patient city zipcode.
```

```javascript
    const response = await keldoc.appointments.update(21354, {start_at: '2001-09-23', agenda_id: '2135', state: 'confirmed'});
```

<a name="removeAppointment"/>

* Delete an appointment

  __Arguments__

```javascript
    id {Integer} KelDoc internal ID for appointment to remove.
```

```javascript
    const response = await keldoc.appointments.remove(21321);
```

---------------------------------------

<a name="getAvailabilities"/>

### Availabilities

* Fetch available slots for agendas. Maximum duration between start date and end date is 7 days.

  __Arguments__

```javascript
    motive_id   {Integer} KelDoc internal ID (required).
    start_date  {Datetime} start date.
    end_date    {Datetime} end date.
    agenda_ids  {Array} IDs of agendas.
```

```javascript
    const response = await keldoc.availabilities.get({
      agenda_ids: 112,
      end_date: '2017-09-17',
      start_date: '2017-09-18',
      motive_id: '366',
    });
```

---------------------------------------

<a name="getAvailableSlots"/>

### Available slots

* Fetch available slots for agendas. Maximum duration between start date and end date is 2 months (default is 2 months from now).
* When motive_ids is [], it means the available slot is for all motives.
  __Arguments__

```javascript
    agenda_id   {Array} ID of agenda.
    start_date  {Datetime} start date.
    end_date    {Datetime} end date.
```

```javascript
    const response = await keldoc.availableSlots.get({
      agenda_id: 112,
      start_date: '2017-09-18',
      end_date: '2017-09-17',
    });
```

---------------------------------------

<a name="getConfig"/>

### Config

* Retrieves account configuration : agendas, motives, specialties

```javascript
    const response = await keldoc.config.get();
```

---------------------------------------

<a name="getMotives"/>

### Motives

#### Fetch all motives

```javascript
    const response = await keldoc.motives.get();
```

---------------------------------------

<a name="createPatient"/>

### Patients

* Create a new patient

  __Arguments__

```javascript
    first_name  {String} patient firstname.
    last_name   {String} patient lastname.
    maiden_name {String} patient maiden name.
    gender      {Char} 'm' or 'f'.
    phone       {String} patient phone number.
    email       {String} patient email address.
    street      {String} patient street number & streetnames.
    city        {String} patient city name.
    zipcode     {String} patient city zipcode.
```

```javascript
    const response = await keldoc.patients.create({
      first_name: 'test',
      last_name: 'john',
      gender: 'm',
      email: 'test.john@test.com'
    });
```

<a name="updatePatient"/>

* Update an existing patient

  __Arguments__

```javascript
    id          {Integer} KelDoc internal ID for patient to update.
    first_name  {String} patient firstname.
    last_name   {String} patient lastname.
    maiden_name {String} patient maiden name.
    gender      {Char} 'm' or 'f'.
    phone       {String} patient phone number.
    email       {String} patient email address.
    street      {String} patient street number & streetnames.
    city        {String} patient city name.
    zipcode     {String} patient city zipcode.
```

```javascript
   const response = await keldoc.patients.update(12026, {
      first_name: 'test',
      last_name: 'john',
      gender: 'm',
      email: 'test.john@test.com'
    });
```

---------------------------------------

<a name="getSpecialties"/>

### Specialties

* Fetch all specialties

```javascript
    const response = await keldoc.specialties.get();
```

---------------------------------------

<a name="createConfigWebhooks"/>

### ConfigWebhooks

* Create account webhook

  __Arguments__

```javascript
    url {String} Webhook url.
```

```javascript
    const response = await keldoc.configWebhooks.create({url: 'http://test.webhook.com'});
```

<a name="updateConfigWebhooks"/>

* Update account webhook

  __Arguments__

```javascript
    url {String} Webhook url.
```

```javascript
    const response = await keldoc.configWebhooks.update({url: 'http://test.webhook.com'});
```

<a name="removeConfigWebhooks"/>

* Delete account webhook

  __Arguments__

```javascript
    url {String} Webhook url.
```

```javascript
    const response = await keldoc.configWebhooks();
```

---------------------------------------


## Scripts

Run using npm run <script> command.

    clean - remove coverage data, Jest cache and transpiled files,
    lint - lint source files and tests,
    typecheck - check type annotations,
    test - lint, typecheck and run tests with coverage,
    test-only - run tests with coverage,
    test:watch - interactive watch mode to automatically re-run tests,
    build - compile source files,
    build:watch - interactive watch mode, compile sources on change.


## License
MIT © [Dimitri DO BAIRRO](https://github.com/rimiti/keldoc-js-sdk/blob/master/LICENSE)

[prod-dependencies-badge]: https://david-dm.org/rimiti/keldoc-js-sdk/status.svg
[prod-dependencies]: https://david-dm.org/rimiti/keldoc-js-sdk
[coverage-badge]: https://codecov.io/gh/rimiti/keldoc-js-sdk/branch/master/graph/badge.svg
[coverage]: https://codecov.io/gh/rimiti/keldoc-js-sdk
[travis-badge]: https://travis-ci.org/rimiti/keldoc-js-sdk.svg?branch=master
[travis-ci]: https://travis-ci.org/rimiti/keldoc-js-sdk
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license]: https://github.com/rimiti/keldoc-js-sdk/blob/master/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com