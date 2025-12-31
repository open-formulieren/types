import {expectAssignable, expectNotAssignable} from 'tsd';

import {HasValidation} from '../../dist/';

type OnlyRequired = HasValidation<'required'>;

// Valid uses

expectAssignable<OnlyRequired>({});
expectAssignable<OnlyRequired>({
  validate: {
    required: undefined,
  },
});
expectAssignable<OnlyRequired>({
  validate: {
    required: true,
  },
});
expectAssignable<OnlyRequired>({
  validate: {
    required: false,
  },
});

expectAssignable<OnlyRequired>({
  translatedErrors: {
    nl: {
      required: 'Required error message',
    },
  },
});
expectAssignable<OnlyRequired>({
  errors: {
    required: 'Required error message',
  },
});

// Invalid uses

expectNotAssignable<OnlyRequired>({
  validate: {
    min: 123,
  },
});
expectNotAssignable<OnlyRequired>({
  errors: {
    min: 'nope',
  },
});
expectNotAssignable<OnlyRequired>({
  translatedErrors: {
    de: {
      required: 'Required error message',
    },
  },
});
expectNotAssignable<OnlyRequired>({
  translatedErrors: {
    nl: {
      maxLength: 'Oi mate',
    },
  },
});
