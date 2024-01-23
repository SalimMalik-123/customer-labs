import { useState } from "react";
import SegmentCard from "../../SegmentCard";
import { Segment } from "../../../core/models/master";
import { SchemasList } from "./schemas";
const IntialSchema: Segment[] = [
  {
    label: "First Name",
    value: "frist_name",
    color: "#58ed67",
    options: [
      { value: "Salim", label: "Salim" },
      { value: "lucy", label: "Lucy" },
      { value: "Syed", label: "Syed" },
    ],
  },
  {
    label: "Last Name",
    value: "last_name",
    color: "red",
    options: [
      { value: "Malik", label: "Malik" },
      { value: "Rio", label: "Rio" },
      { value: "Ijaz", label: "Ijaz" },
    ],
  },
];
const SchemaSection = () => {
  const [schemas, setSchemas] = useState<Segment[]>(IntialSchema);
  const [schemasList, setSchemasList] = useState<Segment[]>(SchemasList);
  const [sltdSchemas, setSltdSchemas] = useState<string | undefined>();

  const handleAddSchema = () => {
    let filterSchema: Segment = {} as Segment;
    const filterSchemaList = schemasList.filter((o) => {
      if (o.value === sltdSchemas) {
        filterSchema = o;
      } else {
        return o;
      }
    });
    debugger;
    if (filterSchema.value) {
      setSchemas([...schemas, filterSchema]);
      setSchemasList(filterSchemaList);
      setSltdSchemas(undefined);
    }
  };
  return (
    <div className="">
      <div className="my-2 px-3 pb-2 border border-primary">
        {schemas.map((obj, ind) => (
          <SegmentCard
            key={ind}
            color={obj.color}
            placeholder={obj.label}
            options={obj.options}
            onChange={(val) => console.log(val)}
          />
        ))}
      </div>
      <div className="my-2 px-3 pb-2">
        <SegmentCard
          color={"#e2e4e6"}
          placeholder={"Add schema to segment"}
          value={sltdSchemas}
          options={schemasList.map((o) => ({ label: o.label, value: o.value }))}
          onChange={(val) => setSltdSchemas(val)}
        />
      </div>
      <div className="my-2 ps-5">
        <span
          className="text-light-green fw-600 hover-primary"
          style={{ textDecoration: "underline" }}
          onClick={handleAddSchema}
        >
          + Add new schema
        </span>
      </div>
    </div>
  );
};

export default SchemaSection;
