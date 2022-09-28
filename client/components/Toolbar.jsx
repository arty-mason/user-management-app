import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Stack from "@mui/material/Stack";

const Toolbar = () => {
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Button variant="outlined" endIcon={<EmojiEmotionsIcon />}>
          Block
        </Button>
        <Button variant="outlined" endIcon={<SentimentSatisfiedAltIcon />}>
          Unblock
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>
    </div>
  );
};

export default Toolbar;
