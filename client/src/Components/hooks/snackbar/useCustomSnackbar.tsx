import React, { useState, useCallback } from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

interface SnackbarOptions {
  severity: "success" | "warning" | "error" | "info";
  message: string;
}

const useCustomSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<SnackbarOptions>({ severity: "info", message: "" });

  const openSnackbar = useCallback((severity: SnackbarOptions["severity"], message: string) => {
    setOptions({ severity, message });
    setOpen(true);
  }, []);

  const closeSnackbar = useCallback((_event?: React.SyntheticEvent<any> | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }, []);

  const getIcon = (severity: SnackbarOptions["severity"]) => {
    switch (severity) {
      case "success":
        return <CheckCircleIcon fontSize="inherit" />;
      case "warning":
        return <WarningIcon fontSize="inherit" />;
      case "error":
        return <ErrorIcon fontSize="inherit" />;
      case "info":
      default:
        return <InfoIcon fontSize="inherit" />;
    }
  };

  const SnackbarComponent = (
    <Snackbar open={open} autoHideDuration={3500} onClose={closeSnackbar}>
      <MuiAlert
        onClose={closeSnackbar}
        severity={options.severity}
        sx={{
          width: "100%",
          fontSize: "1rem",
          padding: "1rem",
          margin: "1rem",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          borderRadius: "0.5rem",
          boxShadow: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.1)"
        }}
        icon={getIcon(options.severity)}
      >
        {options.message}
      </MuiAlert>
    </Snackbar>
  );

  return { openSnackbar, closeSnackbar, SnackbarComponent };
};

export default useCustomSnackbar;
