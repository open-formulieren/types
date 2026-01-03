import {BaseComponent, Prettify} from '../base';
import {
  AutoComplete,
  ClearOnHide,
  DefaultValue,
  Description,
  Hidden,
  IsSensitiveData,
  Label,
  Tooltip,
} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Component shape/options for the legacy cosign (v1) component.
 *
 * @deprecated
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type CosignV1ComponentSchema = Prettify<
  BaseComponent<'coSign'> &
    Label &
    Description &
    Hidden & {
      /**
       * Which authentication plugin to use to log the cosigner in with.
       */
      authPlugin: string;
    } & OFExtensions<'label' | 'description'>
>;

/**
 * Component shape/options for the cosign (v2) component.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type CosignV2ComponentSchema = Prettify<
  BaseComponent<'cosign'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    DefaultValue<string> &
    AutoComplete &
    Conditional &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
