import { Input } from "antd";

interface Props {
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
}
const CustomInput = (props: Props) => (
  <Input style={{ borderRadius: 4 }} {...props} size="large" />
);

export default CustomInput;
