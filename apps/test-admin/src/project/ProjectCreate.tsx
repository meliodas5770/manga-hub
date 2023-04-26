import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description " multiline source="description" />
        <TextInput label="Name " source="name" />
        <TextInput label="Owner " source="owner" />
        <DateTimeInput label="Start Date" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
