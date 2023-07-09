import React from "react";
import { TextField, Typography } from "@mui/material";

interface ITextInput {
  label: string;
}

export const TextInput = ({ label }: ITextInput) => {
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
        id="outlined-basic"
        variant="outlined"
        size="small"
        autoFocus={true}
        sx={{
          marginBottom: "8px",
          width: "100%",
          ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
            height: "35px",
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
