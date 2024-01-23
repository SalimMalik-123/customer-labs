import { Segment } from "../../../core/models/master";

export const SchemasList: Segment[] = [
  {
    label: "Gender",
    value: "gender",
    color: "#58ed67",
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Others", label: "Others" },
    ],
  },
  {
    label: "Age",
    value: "age",
    color: "#58ed67",
    options: [
      { value: "18 - 21", label: "18 - 21" },
      { value: "22 - 25", label: "22 - 25" },
      { value: "25 - 35", label: "25 - 35" },
    ],
  },
  {
    label: "Account Name",
    value: "account_name",
    color: "#58ed67",
    options: [
      { value: "Malik", label: "Malik" },
      { value: "Rio", label: "Rio" },
      { value: "Ijaz", label: "Ijaz" },
    ],
  },
  {
    label: "City",
    value: "city",
    color: "#58ed67",
    options: [
      { value: "Chennai", label: "Chennai" },
      { value: "Trichy", label: "Trichy" },
      { value: "Kovai", label: "Kovai" },
      { value: "Nellai", label: "Nellai" },
    ],
  },
  {
    label: "State",
    value: "State",
    color: "#58ed67",
    options: [
      { value: "TamilNadu", label: "TamilNadu" },
      { value: "Kerala", label: "Kerala" },
      { value: "Delhi", label: "Delhi" },
    ],
  },
];
