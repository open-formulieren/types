import { NumberComponentSchema } from "./formio";

const number: NumberComponentSchema = {
  id: '8aosjaw',
  type: 'number',
  // basic tab in builder form
  label: 'A sample number',
  key: 'test',
  description: 'Sample description',
  showInSummary: true,
  showInEmail: false,
  showInPDF: true,
  multiple: false,
  hidden: false,
  clearOnHide: true,
  isSensitiveData: false,
  defaultValue: undefined,
  decimalLimit: undefined,
  allowNegative: false,
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
    min: undefined,
    max: undefined,
  },
  translatedErrors: {
    nl: {
      required: 'Je moet een waarde opgeven!!!',
      min: 'Je kan niet minder dan 1 dag per week bestaan.',
      extra: 'TS Compiler should block this!'
    }
  },
  errors: {  // translatedErrors is converted into errors by the backend
    required: 'Je moet een waarde opgeven!!!',
    min: 'Je kan niet minder dan 1 dag per week bestaan.',
  },
  // registration tab in builder form
  registration: {
    attribute: '',
  },
  // translations tab in builder form
  openForms: {
    translations: {
      nl: [{literal: 'foo', translation: 'bar'}],
    }
  }
}


console.log(number);
