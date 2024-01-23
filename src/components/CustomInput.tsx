import { Input } from "antd";

interface Props {
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  isError?: boolean;
}
const CustomInput = (props: Props) => (
  <div>
    <Input
      style={{ borderRadius: 4 }}
      {...props}
      size="large"
      required={true}
      status={props.isError ? "error" : ""}
    />
    {props.isError && (
      <span className=" ms-2 text-danger ">This field is Required</span>
    )}
  </div>
);

export default CustomInput;
