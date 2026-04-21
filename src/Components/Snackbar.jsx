import React, { createContext, useContext, useState, useCallback } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);
  const [current, setCurrent] = useState(null);

  // 🔥 Show Snackbar (Main Function)
  const showSnackbar = useCallback((message, severity = "info") => {
    setQueue((prev) => [...prev, { message, severity }]);
  }, []);

  // 🔁 Handle Next Snackbar
  const processQueue = useCallback(() => {
    if (queue.length > 0) {
      setCurrent(queue[0]);
      setQueue((prev) => prev.slice(1));
    }
  }, [queue]);

  // ❌ Close Snackbar
  const handleClose = () => {
    setCurrent(null);
  };

  // ⏱️ When current is null → show next
  React.useEffect(() => {
    if (!current && queue.length > 0) {
      processQueue();
    }
  }, [queue, current, processQueue]);

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}

      <Snackbar
        open={!!current}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {current && (
          <Alert
            onClose={handleClose}
            severity={current.severity}
            variant="filled"
            sx={{ width: "100%" }}
          >
            {current.message}
          </Alert>
        )}
      </Snackbar>
    </SnackbarContext.Provider>
  );
};