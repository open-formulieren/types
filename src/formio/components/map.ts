import {InputComponentSchema} from '..';

type Validator = 'required';
type TranslatableKeys = 'label' | 'description' | 'tooltip';

/**
 * The map value type.
 *
 * Currently this is limited to a tuple of coordinates identifying a single point on
 * the map. It is expected that in the future this will become a full blown GeoJSON
 * shape.
 */
export type MapValue = [number, number];

export type MapInputSchema = InputComponentSchema<null | MapValue, Validator, TranslatableKeys>;

/**
 * Custom Formio component type.
 *
 * @group Form.io components
 * @category Concrete types
 */
export interface MapComponentSchema
  extends Omit<MapInputSchema, 'hideLabel' | 'disabled' | 'placeholder'> {
  type: 'map';
  /**
   * Default zoom level, limited by Leaflet and the available tile service zoom levels.
   *
   * Leaflet zoom level is a range of 1-20, but the Dutch tile service only supports up
   * to level 13.
   *
   * @todo Make property required, which requires a data migration.
   */
  defaultZoom?: null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  /**
   * Coordinates to center the map on initially.
   *
   * @todo Make property required, which requires a data migration.
   */
  initialCenter?: {
    lat?: number;
    lng?: number;
  };
  /**
   * If true, the backend must apply the globally configured defaults to a particular
   * map instance. This results in populating `defaultZoom` and `initialCenter`, so for
   * the SDK this property has no effect.
   *
   * @todo Make property required, which requires a data migration.
   */
  useConfigDefaultMapSettings?: boolean;
  /**
   * Only specified to be able to type the submission data value. We do not see a use
   * case for pre-selecting a particular location on a map component, as the SDK asks
   * the user for their location anyway.
   *
   * @todo Do not add the default value to the builder.
   */
  defaultValue?: null | MapValue;
}
