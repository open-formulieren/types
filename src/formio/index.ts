/**
 * A fallback, minimal schema to handle the cases where component.type is something unknown.
 *
 * This could be because someone pasted a JSON configuration from Form.io's hosted
 * form builder into our components or just wrote component definitions directly to our
 * API endpoints.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface FallbackSchema {
  type?: string;
}

export * from './base';
