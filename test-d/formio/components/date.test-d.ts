import {expectAssignable, expectNotAssignable} from 'tsd';

import {DateComponentSchema} from '../../../lib';

// minimal date component schema
expectAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  key: 'someDate',
  label: 'Some date',
});

// with additional, date-component specific properties
expectAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  key: 'someDate',
  label: 'Some date',
  openForms: {
    translations: {},
    minDate: {
      mode: 'relativeToVariable',
      includeToday: null,
      operator: 'add',
      variable: 'someVariable',
      delta: {
        years: null,
        months: 1,
        days: null,
      },
    },
  },
  datePicker: {
    showWeeks: true,
    startingDay: 0,
    initDate: '',
    minMode: 'day',
    maxMode: 'year',
    yearRows: 4,
    yearColumns: 5,
    minDate: '2023-06-06',
    maxDate: null,
  },
});

// multiple false and appropriate default value type
expectAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  key: 'someDate',
  label: 'Some date',
  multiple: false,
  defaultValue: '',
});
// multiple true and appropriate default value type
expectAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  key: 'someDate',
  label: 'Some date',
  multiple: true,
  defaultValue: [''],
});

// full, correct schema
expectAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  // basic tab
  label: 'Datum',
  key: 'datum',
  description: '',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: true,
  defaultValue: '',
  disabled: false,
  // Advanced tab
  conditional: {
    show: undefined,
    when: '',
    eq: '',
  },
  // Validation tab
  validate: {
    required: false,
    plugins: [],
  },
  translatedErrors: {
    nl: {
      required: '',
    },
    en: {
      required: '',
    },
  },
  // dynamically set/mutated by the backend after processing openForms.minDate|maxDate
  datePicker: {
    showWeeks: true,
    startingDay: 0,
    initDate: '',
    minMode: 'day',
    maxMode: 'year',
    yearRows: 4,
    yearColumns: 5,
    minDate: null,
    maxDate: null,
  },
  // registration tab
  registration: {
    attribute: '',
  },
  // prefill tab
  prefill: {
    plugin: '',
    attribute: '',
  },

  // custom OF extensions
  openForms: {
    // validation processed server-side
    minDate: {
      mode: '',
      includeToday: null,
      operator: 'add',
      variable: 'now',
      delta: {
        years: null,
        months: null,
        days: null,
      },
    },
    maxDate: {
      mode: '',
      includeToday: null,
      operator: 'add',
      variable: 'now',
      delta: {
        years: null,
        months: null,
        days: null,
      },
    },
    // translations tab in builder form
    translations: {
      nl: [{literal: 'foo', translation: 'bar'}],
    },
  },
});

// invalid, multiple true and non-array default value
expectNotAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  key: 'someDate',
  label: 'Some date',
  multiple: true,
  defaultValue: '',
});

// invalid, multiple false and array default value
expectNotAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  key: 'someDate',
  label: 'Some date',
  multiple: false,
  defaultValue: [''],
});

// invalid, multiple true and wrong default value in array element
expectNotAssignable<DateComponentSchema>({
  id: 'evneg4v',
  type: 'date',
  key: 'someDate',
  label: 'Some date',
  multiple: true,
  defaultValue: [0],
});
