import { Datagrid, List, TextField, ResourceComponentProps } from "react-admin";

export const UserList = (props: ResourceComponentProps) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
           
        </Datagrid>
    </List>
);