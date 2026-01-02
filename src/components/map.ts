import {BaseComponent, Prettify} from '../base';
import {ClearOnHide, Description, Hidden, IsSensitiveData, Label, Tooltip} from '../common';
import {Conditional, DisplayConfig, OFExtensions, Registration} from '../extensions';
import {Validation} from '../validation';

/**
 * Longitude, in decimal degrees.
 */
type Lon = number;
/**
 * Latitude, in decimal degrees.
 */
type Lat = number;

/**
 * A pair of coordinates. Note that in GeoJSON longitude comes before latitude.
 */
export type CoordinatePair = [Lon, Lat];

/**
 * A single point, identified by its coordinates.
 */
export interface PointGeometry {
  type: 'Point';
  coordinates: CoordinatePair;
}

/**
 * A line drawn by connecting the points together.
 */
export interface LineStringGeometry {
  type: 'LineString';
  coordinates: CoordinatePair[];
}

/**
 * A polygon, made up of an array of closed line strings with four or more points. The
 * last point of the linestring must be equal to the first.
 */
export interface PolygonGeometry {
  type: 'Polygon';
  coordinates: Array<
    [CoordinatePair, CoordinatePair, CoordinatePair, CoordinatePair, ...CoordinatePair[]]
  >;
}

/**
 * Supported GeoJSON geometries.
 *
 * See {@link https://www.rfc-editor.org/rfc/rfc7946} for the GeoJSON specification.
 */
export type GeoJsonGeometry = PointGeometry | LineStringGeometry | PolygonGeometry;

/**
 * The possible submission data value type(s) for a map component.
 */
export type MapValue = GeoJsonGeometry | null;

/**
 * Definition of a single overlay layer in the map.
 */
interface Overlay {
  /**
   * The unique identifier of the tile layer, defined in/by the backend.
   */
  uuid: string;
  /**
   * (Base) url of the tile layer, understood by the renderer to be able to fetch the
   * layer data/images to display. It is dynamically set by the backend by resolving the
   * `uuid` to the database definition of the layer.
   */
  readonly url: string;
  /**
   * Human readable display name of the layer. Used in the button to toggle layers on/off.
   */
  label: string;
  type: 'wms' | 'wfs';
  layers: string[];
}

/**
 * Additional properties specific to the map comonent.
 */
interface MapExtras {
  /**
   * If true, the backend must apply the globally configured defaults to a particular
   * map instance. This results in populating `defaultZoom` and `initialCenter` and is
   * therefore only relevant for the backend.
   *
   * @privateRemarks Make property required, which requires a data migration.
   */
  useConfigDefaultMapSettings?: boolean;
  /**
   * Default zoom level, limited by Leaflet and the available tile service zoom levels.
   *
   * Leaflet zoom level is a range of 1-20, but the Dutch tile service only supports up
   * to level 13.
   *
   * @privateRemarks Make property required, which requires a data migration.
   */
  defaultZoom?: null | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
  /**
   * Coordinates to center the map on initially.
   *
   * @privateRemarks Make property required, which requires a data migration.
   */
  initialCenter?: {
    lng?: Lon;
    lat?: Lat;
  };
  /**
   * The identifier used for the background tile layer.
   */
  tileLayerIdentifier?: string;
  /**
   * The url belonging to the connected tile layer object, determined by
   * tileLayerIdentifier.
   *
   * This value should not be definable by admins, but should be fetched
   * from the related tile layer object. This happens when fetching the
   * component from the backend.
   */
  readonly tileLayerUrl?: string;
  /**
   * Shapes available for users to draw on the map, which set the value of the
   * field/component.
   *
   * These interaction options are based on the options available in leaflet draw:
   * {@link https://leaflet.github.io/Leaflet.draw/docs/leaflet-draw-latest.html#drawoptions}
   *
   * If no interactions are specified at all, this is equivalent to interactions that
   * only allow the marker.
   */
  interactions?: {
    /**
     * Allow putting a marker on the map, setting a single point (`PointGeometry`).
     */
    marker: boolean;
    /**
     * Allow drawing a line on the map, setting a list of points (`LineStringGeometry`).
     */
    polyline: boolean;
    /**
     * Allow drawing a closed line string, creating a polygon (`PolygonGeometry`).
     */
    polygon: boolean;
  };
  /**
   * Overlays contain additional (visual) information and may be toggled on/off by the
   * end-user. They are displayed above the background tile layer, and layered in the
   * order of the definition. They can be used to show heat-maps, highlight certain
   * points of interest, or provide additional context. WMS and WFS tile layers provide
   * access to lower-level layers, to specify which parts of the entire data-collection
   * should be shown in the map.
   */
  overlays?: Overlay[];
}

/**
 * Component shape/options for the map component.
 *
 * The map displays a geographic map of (a part of) the Netherlands, typically using
 * the tile layer(s) from PDOK. The coorindate system is fixed to the Dutch CRS -
 * Rijksdriehoek.
 *
 * Users can draw geometries on the map, which become the input value for the component
 * in the submission. They are always GeoJSON.
 *
 * Map components do not have default values.
 *
 * @warning The generated documentation might be slightly off due to rendering the type
 * alias as an interface. Double check with the actual TS types!
 *
 * @interface
 *
 * @category Special components
 */
export type MapComponentSchema = Prettify<
  BaseComponent<'map'> &
    Label &
    Description &
    Tooltip &
    DisplayConfig &
    Hidden &
    ClearOnHide &
    IsSensitiveData &
    MapExtras &
    Conditional &
    Validation<'required'> &
    Registration &
    OFExtensions<'label' | 'description' | 'tooltip'>
>;
