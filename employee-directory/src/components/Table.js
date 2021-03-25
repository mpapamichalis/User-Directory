import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [

    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'phone', headerName: 'Phone Number', width: 200 },
    { field: 'email', headerName: "Email", width: 300 },
    { field: 'dob', headerName: "DOB", width: 200 }

]

export default function Table({ rows }) {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}