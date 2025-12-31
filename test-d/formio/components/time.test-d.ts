import {expectAssignable, expectNotAssignable} from 'tsd';

import {TimeComponentSchema} from '../../../dist';

// minimal time component schema
expectAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  key: 'someTime',
  label: 'Some time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
});

// with translated error messages - the multiple messages is special here
expectAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  key: 'someTime',
  label: 'Some time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
  translatedErrors: {
    nl: {
      required: '',
      minTime: 'Moet minimum XYZ zijn',
      invalid_time: 'Ongeldige tijd opgegeven',
    },
    en: {
      required: '',
      maxTime: 'Must be maximum XYZ',
    },
  },
});

// multiple false and appropriate default value type
expectAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  key: 'someTime',
  label: 'Some time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
  multiple: false,
  defaultValue: '09:47',
});

// multiple true and appropriate default value type
expectAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  key: 'someTime',
  label: 'Some time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
  multiple: true,
  defaultValue: ['12:15'],
});

// full, correct schema
expectAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
  // basic tab
  label: 'Some time',
  key: 'someTime',
  description: '',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  defaultValue: '',
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
    minTime: '10:00',
    maxTime: '20:00',
  },
  translatedErrors: {
    nl: {
      required: '',
      minTime: 'Moet minimum XYZ zijn',
      invalid_time: 'Ongeldige tijd opgegeven',
    },
    en: {
      required: '',
      maxTime: 'Must be maximum XYZ',
    },
  },
  // registration tab
  registration: {
    attribute: '',
  },
  // custom OF extensions
  openForms: {
    // translations tab in builder form
    translations: {
      nl: {
        label: 'foo',
        tooltip: 'bar',
      },
    },
  },
});

// invalid, multiple true and non-array default value
expectNotAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  key: 'someTime',
  label: 'Some time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
  multiple: true,
  defaultValue: '',
} as const);

// invalid, multiple false and array default value
expectNotAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  key: 'someTime',
  label: 'Some time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
  multiple: false,
  defaultValue: [''],
} as const);

// invalid, multiple true and wrong default value in array element
expectNotAssignable<TimeComponentSchema>({
  id: 'ezftxdl',
  type: 'time',
  key: 'someTime',
  label: 'Some time',
  inputType: 'text',
  format: 'HH:mm',
  validateOn: 'blur',
  multiple: true,
  defaultValue: [new Date()],
} as const);
