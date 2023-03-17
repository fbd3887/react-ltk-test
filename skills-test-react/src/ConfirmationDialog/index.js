import { Dialog, DialogContent, DialogTitle, IconButton, Button, Typography } from "@mui/material";

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
        <IconButton onClick={onCancel} />
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" mb={8} sx={{ fontWeight: 600 }}>
          {subtitle}
        </Typography>
        <Button
          fullWidth
          sx={{whiteSpace: "nowrap" }}
          onClick={() => onCancel?.()}
          >
            {cancelText}
        </Button>
        <Button
          fullWidth
          sx={{whiteSpace: "nowrap" }}
          onClick={() => onSubmit?.()}
          >
            {confirmText}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
