import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Full name", width: 150 },
  { field: "email", headerName: "Email", type: "string", width: 200 },
  { field: "createdUTC", headerName: "Registered at", width: 170 },
  { field: "lastLoginUTC", headerName: "Last online", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const Home = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");

    const users = response.data.map((user) => ({
      ...user,
      createdUTC: "123",
      lastLoginUTC: "123",
    }));

    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteContact = (id) => {
    if (window.confirm("Are you sure you want to block that contact?")) {
      axios.delete(`http://localhost:5000/api/block/${id}`);
      toast.success("Contact blocked successfully");
      setTimeout(() => loadData(), 500);
    }
  };

  const blockContact = (id) => {
    if (window.confirm("Are you sure you want to unblock that contact?")) {
      axios.delete(`http://localhost:5000/api/unblock/${id}`);
      toast.success("Contact unblocked successfully");
      setTimeout(() => loadData(), 500);
    }
  };

  const unblockContact = (id) => {
    if (window.confirm("Are you sure you want to delete that contact?")) {
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success("Contact deleted successfully");
      setTimeout(() => loadData(), 500);
    }
  };

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
        <Button
          variant="outlined"
          endIcon={<DeleteIcon />}
          onClick={() => deleteContact}
        >
          Delete
        </Button>
      </Stack>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        GridToolbar
      />
    </div>
  );
};

export default Home;
