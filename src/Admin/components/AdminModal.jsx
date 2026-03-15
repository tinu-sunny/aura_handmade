import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  IconButton,
  Divider,
  Stack
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) scale(1)",
  width: { xs: "90%", md: 520 },
  bgcolor: "background.paper",
  borderRadius: 3,
  boxShadow: "0px 20px 50px rgba(0,0,0,0.15)",
  overflow: "hidden",
  animation: "modalFade 0.3s ease",
  "@keyframes modalFade": {
    "0%": { opacity: 0, transform: "translate(-50%, -60%) scale(0.95)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
  }
};

function AdminModal({ view }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTitle = () => {
    if (view === "productView") return "View Product";
    if (view === "ProductEdit") return "Edit Product";
    if (view === "addNewProduct") return "Add New Product";
    return "";
  };

  return (
    <>
      {/* BUTTONS */}

      {view === "addNewProduct" ? (
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            background: "linear-gradient(45deg,#f4b400,#ff9800)",
            color: "black",
            fontWeight: "bold",
            borderRadius: 3,
            px: 3,
            py: 1,
            boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
            "&:hover": {
              background: "linear-gradient(45deg,#e6a400,#ff8f00)"
            }
          }}
        >
          + Add New Product
        </Button>
      ) : view === "ProductEdit" ? (
        <Box
          onClick={handleOpen}
          sx={{
            p: 1.2,
            borderRadius: 2,
            backgroundColor: "#fff3e0",
            cursor: "pointer",
            transition: "0.2s",
            "&:hover": {
              backgroundColor: "#ffe0b2",
              transform: "scale(1.05)"
            }
          }}
        >
          <span className="material-symbols--edit-outline-rounded"></span>
        </Box>
      ) : view === "productView" ? (
        <Box
          onClick={handleOpen}
          sx={{
            p: 1.2,
            borderRadius: 2,
            backgroundColor: "#e3f2fd",
            cursor: "pointer",
            transition: "0.2s",
            "&:hover": {
              backgroundColor: "#bbdefb",
              transform: "scale(1.05)"
            }
          }}
        >
          <span className="solar--eye-bold-duotone"></span>
        </Box>
      ) : null}

      {/* MODAL */}

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          
          {/* HEADER */}
          <Box
            sx={{
              background: "linear-gradient(90deg,#f4b400,#ff9800)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 3,
              py: 2
            }}
          >
            <Typography fontWeight="bold" color="black">
              {getTitle()}
            </Typography>

            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider />

          {/* CONTENT */}
          <Box sx={{ p: 3 }}>
            <Typography color="text.secondary">
              Here you can {getTitle().toLowerCase()} details.
            </Typography>

            <Box
              sx={{
                mt: 3,
                p: 3,
                borderRadius: 2,
                backgroundColor: "#fafafa",
                border: "1px dashed #ddd",
                textAlign: "center"
              }}
            >
              Modal Content Area
            </Box>

            {/* ACTION BUTTONS */}

            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              sx={{ mt: 3 }}
            >
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>

              {view !== "productView" && (
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f4b400",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  Save
                </Button>
              )}
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default AdminModal;