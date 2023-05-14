import {HasValidation} from '.';

const validation: HasValidation<'required' | 'maxLength'> = {
  validate: {
    required: true,
    maxLength: 100,
  },
  errors: {
    maxLength: 'too long',
    // min: 'Not allowed',
  },
};

console.log(validation);
