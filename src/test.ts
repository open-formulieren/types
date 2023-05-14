import { TranslationsContainer } from "./formio";

const translations: TranslationsContainer = {
  nl: [{literal: 'foo', translation: 'bar'}],
}

// const number: InputComponentSchema<
// number,
// 'required' | 'min' | 'max' | 'plugins'
// > = {
//   id: '8aosjaw',
//   key: 'test',
//   type: 'number',
//   label: 'A sample number',
//   validate: {
//     required: true,
//     min: 42,
//     max: 420,
//   }
// }


console.log(
  translations,
  // number
);
