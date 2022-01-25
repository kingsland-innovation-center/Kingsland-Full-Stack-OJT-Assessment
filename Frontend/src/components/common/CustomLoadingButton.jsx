import React from "react";
import { LoadingButton } from '@mui/lab';

export default function CustomLoadingButton({ label, loading }) {
 return (
  <LoadingButton
    fullWidth
    size="large"
    type="submit"
    variant="contained"
    loading={loading}
  >
    {label}
  </LoadingButton>
 )
}