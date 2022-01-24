import React from "react";
import { TextField } from "@mui/material";

export default function CustomTextField({label, error, getfieldpropsfn, helperText }) {
 return (
  <TextField
    fullWidth
    variant="filled"
    label={label}
    {...getfieldpropsfn}
    error={error}
    helperText={helperText}
  />
 )
}