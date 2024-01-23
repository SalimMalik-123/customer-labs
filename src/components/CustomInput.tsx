import { Input } from "antd";

interface Props {
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  isError?: boolean;
  value: string;
  onChange: (value: string) => void;
}
const CustomInput = (props: Props) => (
  <div>
    <Input
      style={{ borderRadius: 4 }}
      {...props}
      size="large"
      required={true}
      status={props.isError ? "error" : ""}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
    {props.isError && (
      <span className=" ms-2 text-danger ">This field is Required</span>
    )}
  </div>
);

export default CustomInput;
