import React, {useState} from "react";
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { TextField, IconButton, InputAdornment } from '@mui/material';

export default function CustomPasswordField({error, getfieldpropsfn, helperText }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      variant="filled"
      autoComplete="current-password"
      type={showPassword ? 'text' : 'password'}
      label="Password"
      {...getfieldpropsfn}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
              <Icon icon={showPassword ? eyeFill : eyeOffFill} />
            </IconButton>
          </InputAdornment>
        )
      }}
      error={error}
      helperText={helperText}
    />
  );
}