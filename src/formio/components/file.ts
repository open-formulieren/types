import {DisplayConfig, HasValidation, OFExtensions, StrictComponentSchema} from '../base';

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
     * Does not seems to be set to a meaningful value.
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
     * Does not seems to be set to a meaningful value.
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
 * @group Form.io components
 * @category Base types
 */
export interface BaseFileComponentSchema
  extends Omit<StrictComponentSchema<FileUploadData[]>, UnusedFileProperties | 'errors'>,
    DisplayConfig,
    OFExtensions<TranslatableKeys>,
    HasValidation<Validator> {
  type: 'file';
  multiple?: boolean;
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
 * @group Form.io components
 * @category Concrete types
 *
 * Note that while `defaultValue` is defined here, this is only to be able to type
 * define the submission data type. A file upload component cannot actually have
 * default values.
 */
export type FileComponentSchema = SingleFileComponentSchema | MultipleFileComponentSchema;
