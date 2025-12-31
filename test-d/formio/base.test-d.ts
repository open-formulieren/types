import {expectAssignable, expectNotAssignable} from 'tsd';

import {TextFieldComponentSchema} from '../../dist';
import {PossibleValidatorErrorKeys, SchemaWithValidation} from '../../dist/formio/base';

// SchemaWithValidation tests

expectAssignable<SchemaWithValidation>({
  errors: {required: 'foo'},
});

type EK = PossibleValidatorErrorKeys<SchemaWithValidation>;
expectAssignable<EK>('required');
expectNotAssignable<EK>('any string');
expectNotAssignable<EK>(Symbol('foo'));
expectNotAssignable<EK>(123);

// Extract error keys tests

type ValidatorErrorKeys = PossibleValidatorErrorKeys<TextFieldComponentSchema>;

expectAssignable<ValidatorErrorKeys>('required');
expectAssignable<ValidatorErrorKeys>('maxLength');
expectAssignable<ValidatorErrorKeys>('pattern');

expectNotAssignable<ValidatorErrorKeys>('');
expectNotAssignable<ValidatorErrorKeys>('foo');
expectNotAssignable<ValidatorErrorKeys>('minLength');
expectNotAssignable<ValidatorErrorKeys>('min');
expectNotAssignable<ValidatorErrorKeys>('constructor');
