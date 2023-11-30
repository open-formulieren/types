import {expectAssignable, expectNotAssignable} from 'tsd';

import {MapComponentSchema} from '../../../lib/';

// minimal map component schema
expectAssignable<MapComponentSchema>({
  id: 'yejak',
  type: 'map',
  key: 'someMap',
  label: 'Some map',
});

// with additional, map-component specific properties
expectAssignable<MapComponentSchema>({
  id: 'yejak',
  type: 'map',
  key: 'someMap',
  label: 'Some map',
  defaultZoom: 10,
  initialCenter: {
    lat: 52.37403,
    lng: 4.88969,
  },
  useConfigDefaultMapSettings: false,
  defaultValue: null,
});

// full, correct schema
expectAssignable<MapComponentSchema>({
  id: 'yejak',
  type: 'map',
  defaultValue: null,
  // basic tab in builder form
  label: 'Some map',
  key: 'someMap',
  description: 'A description',
  tooltip: 'A tooltip',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  defaultZoom: 10,
  initialCenter: {
    lat: 52.37403,
    lng: 4.88969,
  },
  useConfigDefaultMapSettings: false,
  // advanced tab in builder form
  conditional: {
    show: undefined,
    when: undefined,
    eq: undefined,
  },
  // validation tab in builder form
  validate: {
    required: false,
    plugins: undefined,
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
    },
  },
  errors: {
    // translatedErrors is converted into errors by the backend
    required: 'Je moet een waarde opgeven!!!',
  },
  // registration tab in builder form
  registration: {
    attribute: '',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: {
        label: 'foo',
        description: 'bar',
      },
    },
  },
});

// different component type
expectNotAssignable<MapComponentSchema>({
  type: 'fieldset',
} as const);

// no 'multiple' support
expectNotAssignable<MapComponentSchema>({
  id: 'yejak',
  type: 'map',
  key: 'someMap',
  label: 'Some map',
  multiple: true,
} as const);

// incorrect, invalid validator key
expectNotAssignable<MapComponentSchema>({
  id: 'yejak',
  type: 'map',
  key: 'someMap',
  label: 'Some map',
  validate: {
    maxLength: 100,
  },
} as const);
