import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions} from '../extensions';
import {Validation} from '../validation';

/**
 * Shape of a single file upload from Form.io to the backend.
 */
export interface FileUploadData {
  data: {
    /**
     * Full backend URL of the uploaded file (API endpoint).
     *
     * The value appears to be identical to the root `url` key.
     */
    url: string;
    /**
     * Does not seem to be set to a meaningful value.
     */
    form: '';
    /**
     * File name of uploaded file.
     *
     * The value is different from the root `name` key.
     */
    name: string;
    /**
     * File size in bytes, (positive) integer value.
     *
     * The value appears to be identical to the root `size` key.
     */
    size: number;
    /**
     * Formio base URL configuration option, set to the root of our own API.
     */
    baseUrl: string;
    /**
     * Does not seem to be set to a meaningful value.
     */
    project: '';
  };
  name: string;
  originalName: string;
  /**
   * File size in bytes, (positive) integer value.
   */
  size: number;
  /**
   * We only support file uploads to a backend URL.
   */
  storage: 'url';
  /**
   * MIME type, determined by the browser during upload. If the OS/browser doesn't know
   * it, it seems to be an empty string (see https://github.com/open-formulieren/open-forms-sdk/
   * blob/27877938249cdd627294871b70291ab8dc66fd61/src/formio/components/FileField.js#L279)
   */
  type: string;
  /**
   * Full backend URL of the uploaded file (API endpoint).
   */
  url: string;
}

/**
 * File-specific properties that aren't worth defining in the common module.
 *
 * There are many more Formio properties for the file component that we omitted because
 * they're irrelevant for our builder/renderer anyway, e.g. the `storage` and `webcam`
 * properties.
 */
interface FileExtras {
  /**
   * Flag that controls the multi-value mode of the field.
   *
   * @remarks
   * There is some interaction with the configuration option for the maximum number of
   * files - it could be inferred if that is unset, then multiple is allowed, otherwise
   * set it to `1` or any other fixed number.
   */
  multiple?: boolean;
  /**
   * File selection and processing options.
   */
  file: {
    /**
     * Optional template for the file name. This is picked up in the backend, whereas
     * Formio.js typically applies it client-side already.
     */
    name: string;
    /**
     * Allowed file types, expressed as mime type (e.g. `image/*`) or the wildcard
     * literal.
     */
    type: (`${string}/${string}` | '*')[];
    /**
     * Display labels for the specified allowed file types, injected by the backend.
     */
    readonly allowedTypesLabels: string[];
  };
  /**
   * File pattern string, created from the allowed file types and used for the browser
   * file selection input (the `accept` attribute).
   *
   * May be an empty string, which has the same behaviour as a wildcard.
   *
   * @deprecated
   * This is probably obsoleted by the new renderer, which uses the {@link file}
   * configuration instead.
   */
  filePattern: string;
  /**
   * The file size limit for an individual file.
   *
   * Example values: 10MB, 1GB...
   *
   * The value is parsed into a "number of bytes" integer.
   */
  fileMaxSize?: string; // strings like 10MB, 1GB... parsed by Form.io

  /**
   * Apply the file type configuration from the global configuration instead of options
   * on this component.
   *
   * @deprecated
   * To be moved into the `openForms` top-level key.
   */
  useConfigFiletypes?: boolean;
  /**
   * Image processing configuration options. Only used in the backend.
   *
   * @deprecated
   * To be moved into the `openForms` top-level key.
   */
  of?: {
    image?: {
      resize?: {
        apply?: boolean;
        // backend falls back to defaults if the keys are absent, but if they are
        // provided, they must be ints
        width?: number;
        height?: number;
      };
    };
  };
  /**
   * The maximum number of files that may be added for this component.
   *
   * @deprecated
   * To be moved in the `validate` configuration options?
   */
  maxNumberOfFiles?: number | null;

  /**
   * Custom registration options for registration plugins.
   *
   * @deprecated
   * This will be moved to a dedicated section in the new admin UI and removed from the
   * component configuration, as it doesn't play well with multiple registration backend
   * configurations/options at the form level.
   */
  registration?: {
    informatieobjecttype?: string;
    bronorganisatie?: string;
    docVertrouwelijkheidaanduiding?: string;
    titel?: string;
  };
}

interface FileExtensions {
  /**
   * Mark the component as "soft-required", a weaker version of `validate.required`.
   * This should be paired with the `softRequiredErrors` component.
   *
   * When a component is soft required, proceeding to the next step/submitting the form
   * is possible without providing a value, but it's strongly recommended to not leave
   * the field empty.
   */
  softRequired?: boolean;
}

/**
 * Component shape/options for the file component.
 *
 * The file component is a bit weird - it always uses an array of values, irrespective
 * of the `multiple` property value.
 *
 * @remarks The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Basic components
 */
export type FileComponentSchema = Prettify<
  BaseComponent<'file'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    Conditional &
    Validation<'required', false> &
    OFExtensions<'label' | 'description' | 'tooltip', FileExtensions> &
    FileExtras
>;
