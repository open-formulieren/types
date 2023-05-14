export type JSONPrimitive = string | number | boolean | null;
export type JSONObject = {[key: string]: JSONType};
export type JSONType =
  | JSONPrimitive
  | JSONObject
  | JSONType[];
