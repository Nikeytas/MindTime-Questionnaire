import { SelectOption } from "../../interfaces/Select";

export const classNames = (...classes: any[]) => {
  return classes.filter(Boolean).join(" ");
};

export const transformToArray = (data: SelectOption[]): string[] => {
  return data.map((item) => item.label);
};
