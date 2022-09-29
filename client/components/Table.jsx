import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const initialState = {
  name: "",
  email: "",
  registrationdate: "",
  lastlogin: "",
  status: "",
};

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Full name", width: 150 },
  { field: "email", headerName: "Email", type: "string", width: 200 },
  { field: "registrationdate", headerName: "Registered at", width: 170 },
  { field: "lastlogin", headerName: "Last online", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const rows = [];

const Table = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: "5px",
        }}
      >
        <Typography
          sx={{
            mt: "5px",
            ml: "5px",
            fontSize: "15px",
          }}
        >
          Выделить все /<br></br> Снять выделение
        </Typography>
        <Button variant="outlined" endIcon={<SentimentVeryDissatisfiedIcon />}>
          Block
        </Button>
        <Button variant="outlined" endIcon={<SentimentSatisfiedAltIcon />}>
          Unblock
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>
      <DataGrid
        sx={{}}
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
