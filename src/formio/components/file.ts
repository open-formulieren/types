import {DisplayConfig, HasValidation, OFExtensions, StrictComponentSchema} from '../base';
import {OFValidateOptions} from '../validation';

type UnusedFileProperties = 'hideLabel' | 'placeholder' | 'disabled' | 'widget' | 'validate';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

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

export interface FileUploadConfiguration {
  // vanilla Form.io
  name: string;
  type: string[];
  // custom, injected by the backend or calculated by the builder
  allowedTypesLabels: string[];
}

/**
 * @group Form.io components
 * @category Base types
 */
export interface BaseFileComponentSchema
  extends Omit<StrictComponentSchema<FileUploadData[]>, UnusedFileProperties | 'errors'>,
    DisplayConfig,
    Omit<OFExtensions<TranslatableKeys, {softRequired?: boolean}>, 'registration'>,
    HasValidation<Validator> {
  validate?: OFValidateOptions<Validator>;
  type: 'file';
  multiple?: boolean;
  // (possibly) more-constrained existing formio properties
  webcam: false;
  options: {withCredentials: true};
  storage: 'url';
  url: string;
  file: FileUploadConfiguration;
  filePattern: string; // can be empty string, which sort of acts like wildcard
  fileMaxSize?: string; // strings like 10MB, 1GB... parsed by Form.io

  // custom open forms properties.
  // TODO: this should all be merged in the openForms namespace, but that's a rather
  // big refactor/cleanup :(
  useConfigFiletypes?: boolean;
  // backend gloms it with defaults, so it anticipates keys being absent. Note that this
  // is also only used in the backend!
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
  maxNumberOfFiles?: number | null; // should maybe go in validate.maxNumberOfFiles?
  registration?: {
    informatieobjecttype?: string;
    bronorganisatie?: string;
    docVertrouwelijkheidaanduiding?: string;
    titel?: string;
  };
}

export type SingleFileComponentSchema = BaseFileComponentSchema & {
  multiple?: false;
  defaultValue?: [] | [FileUploadData];
};

export type MultipleFileComponentSchema = BaseFileComponentSchema & {
  multiple: true;
  defaultValue?: FileUploadData[];
};

/**
 * The shape of a file upload component.
 *
 * Note that while `defaultValue` is defined here, this is only to be able to derive
 * the submission data type. A file upload component cannot actually have default
 * values.
 *
 * @group Form.io components
 * @category Concrete types
 */
export type FileComponentSchema = SingleFileComponentSchema | MultipleFileComponentSchema;
