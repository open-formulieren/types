import {expectAssignable} from 'tsd';

import {SoftRequiredErrorsComponentSchema} from '../../../dist';

// Minimal schema
expectAssignable<SoftRequiredErrorsComponentSchema>({
  type: 'softRequiredErrors',
  id: 'iitral8',
  key: 'someKey',
  html: '<div>Will need to be properly {{ field_errors }} structured.</div>',
});

// With translations
expectAssignable<SoftRequiredErrorsComponentSchema>({
  type: 'softRequiredErrors',
  id: 'iitral8',
  key: 'someKey',
  html: '<div>Will need to be properly {{ field_errors }} structured.</div>',
  openForms: {
    translations: {
      nl: {
        html: '<div>NL translation</div>',
      },
    },
  },
});
