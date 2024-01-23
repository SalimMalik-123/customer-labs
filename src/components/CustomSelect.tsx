import { Select } from "antd";

interface Props {
  color: string;
  options?: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
  onChange?: (value: string) => void;
  placeholder: string;
  value?: string;
}
const CustomSelect = (props: Props) => (
  <Select
    // defaultValue="lucy"
    placeholder={
      <span className="text-dark text-small"> {props.placeholder}</span>
    }
    // style={{ width: 120 }}
    value={props.value}
    className="w-100"
    onChange={props.onChange}
    // options={[
    //   { value: "jack", label: "Jack" },
    //   { value: "lucy", label: "Lucy" },
    //   { value: "Yiminghe", label: "yiminghe" },
    //   { value: "disabled", label: "Disabled", disabled: true },
    // ]}
    options={props.options}
  />
);

export default CustomSelect;
