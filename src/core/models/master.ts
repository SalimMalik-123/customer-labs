export interface Segment {
  label: string;
  value: string;
  color: string;
  options: Option[];
}
export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}
