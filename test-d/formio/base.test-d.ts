import {expectAssignable, expectNotAssignable} from 'tsd';

import {TextFieldComponentSchema} from '../../lib';
import {PossibleValidatorErrorKeys} from '../../lib/formio/base';

type ValidatorErrorKeys = PossibleValidatorErrorKeys<TextFieldComponentSchema>;

expectAssignable<ValidatorErrorKeys>('required');
expectAssignable<ValidatorErrorKeys>('maxLength');
expectAssignable<ValidatorErrorKeys>('pattern');

expectNotAssignable<ValidatorErrorKeys>('');
expectNotAssignable<ValidatorErrorKeys>('foo');
expectNotAssignable<ValidatorErrorKeys>('minLength');
expectNotAssignable<ValidatorErrorKeys>('min');
expectNotAssignable<ValidatorErrorKeys>('constructor');
