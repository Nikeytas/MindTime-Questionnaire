import { StringOrNumber } from "./types/types";
export interface SelectOption {
  value: string | number;
  label: string;
}

export interface FilterObject {
  name: string;
  values: StringOrNumber[];
}
