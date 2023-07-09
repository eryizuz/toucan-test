import React from "react";
import { TextField, Typography } from "@mui/material";

interface IInputMessage {
  label: string;
}

export const InputMessage = ({ label }: IInputMessage) => {
  return (
    <>
      <Typography
        sx={{
          marginBottom: "2px",
          alignSelf: "flex-start",
          fontSize: "13px",
          fontWeight: "300",
          color: "#605E5E",
        }}
      >
        {label} *
      </Typography>
      <TextField
        id="filled-multiline-static"
        multiline
        size="small"
        variant="filled"
        rows={5}
        sx={{
          marginBottom: "8px",
          width: "100%",
          ".css-gwvjed-MuiInputBase-root-MuiFilledInput-root": {
            backgroundColor: "#fff",
            padding: "10px",
            paddingTop: "0.75em",
          },
          ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
            height: "170px",
            display: "flex",
            alignItems: "flex-start",
          },
          border: "1px solid #605E5E",
          background: "#fff",
          // border: "1px solid #ACABAB",
          ":hover": {
            border: "2px solid #605E5E",
            background: "#DBDBDB33",
          },
          ":active": {
            border: "2px solid #605E5E",
            background: "#DBDBDB33",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "orange",
              border: "none",
            },
          },
          "& .MuiOutlinedInput-root:hover": {
            "&.MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          ":focus": {
            border: "2px solid #605E5E",
            background: "#fff",
          },
        }}
      >
        {}
      </TextField>
    </>
  );
};
