import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Stack from "@mui/material/Stack";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "name", headerName: "Full name", width: 150 },
  { field: "email", headerName: "Email", type: "string", width: 200 },
  { field: "registrationdate", headerName: "Registered at", width: 120 },
  { field: "lastlogin", headerName: "Last online", width: 120 },
  { field: "status", headerName: "Status", width: 100 },
];

const rows = [
  {
    id: 1,
    name: "Jon Snow",
    email: "iknownothing@gmail.com",
    registrationdate: "10.05.2005",
    lastlogin: "17.09.2022",
    status: "Blocked",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "ilovemybrother@gmail.com",
    registrationdate: "11.05.2008",
    lastlogin: "28.09.2022",
    status: "Active",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "ilovemysister@gmail.com",
    registrationdate: "10.05.2008",
    lastlogin: "27.09.2022",
    status: "Active",
  },
  {
    id: 4,
    name: "Arya Stark",
    email: "ilovekilling@gmail.com",
    registrationdate: "10.05.2005",
    lastlogin: "20.09.2022",
    status: "Active",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "bendtheknee@gmail.com",
    registrationdate: "02.11.2006",
    lastlogin: "15.09.2022",
    status: "Blocked",
  },
  {
    id: 6,
    name: "Viserys Targaryen",
    email: "iamtheking@gmail.com",
    registrationdate: "07.10.2001",
    lastlogin: "27.04.2020",
    status: "Blocked",
  },
  {
    id: 7,
    name: "Brandon Stark",
    email: "iseeyou@gmail.com",
    registrationdate: "10.05.2019",
    lastlogin: "29.09.2022",
    status: "Active",
  },
  {
    id: 8,
    name: "Joeffrey Baratheon",
    email: "begformercy@gmail.com",
    registrationdate: "10.05.2005",
    lastlogin: "19.04.2012",
    status: "Blocked",
  },
];
const Table = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          my: "5px",
        }}
      >
        <Button variant="outlined" endIcon={<SentimentVeryDissatisfiedIcon />}>
          Block
        </Button>
        <Button variant="outlined" endIcon={<SentimentSatisfiedAltIcon />}>
          Unblock
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        GridToolbar
      />
    </div>
  );
};

export default Table;
