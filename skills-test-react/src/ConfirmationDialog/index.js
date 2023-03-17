import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ConfirmationDialog = ({
  title,
  isOpen,
  cancelText,
  confirmText,
  Icon,
  onCancel,
  onSubmit,
  subtitle,
}) => {
  return (
    <Dialog open={isOpen} onClose={onCancel} maxWidth="sm">
      <DialogTitle>
        {title}
        <IconButton
          onClick={onCancel}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack alignItems="center" spacing={3}>
          {Icon ? (
            <Icon
              sx={{
                width: 40,
                height: 40,
                color: "gray",
              }}
            />
          ) : null}
          <Typography variant="body1" mb={8} sx={{ fontWeight: 600 }}>
            {subtitle}
          </Typography>
          <Stack direction="row" spacing={8}>
            <Button
              fullWidth
              sx={{ paddingLeft: 10, paddingRight: 10, whiteSpace: "nowrap" }}
              size="large"
              variant="outlined"
              onClick={() => onCancel?.()}
            >
              {cancelText}
            </Button>
            <Button
              fullWidth
              sx={{
                paddingLeft: 10,
                paddingRight: 10,
                whiteSpace: "nowrap",
                backgroundColor: "#810BCF",
              }}
              size="large"
              variant="contained"
              onClick={() => onSubmit?.()}
            >
              {confirmText}
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
