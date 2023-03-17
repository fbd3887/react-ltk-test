import { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import { useDispatch, useSelector } from "react-redux";
import ConfirmationDialog from "../ConfirmationDialog"
import { enqueueSnackbar } from "notistack";
import { deleteValue } from "../actions/actions";

const TodoItemTable = () => {
  const dispatch = useDispatch();
  const [activeDialog, setActiveDialog] = useState(false)
  const values = useSelector((state) => state?.form?.values) || [];
  const handleDelete = (valueToDelete) => {
    if (valueToDelete) {
      dispatch(deleteValue(valueToDelete))
      enqueueSnackbar("Record Deleted", {
        variant: "success",
        anchorOrigin: {vertical: "top", horizontal: "right"}
      });
    }
  }
  return (
    <>
      <Paper variant="outline">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>No.</TableCell>
                <TableCell>Item</TableCell>
                <TableCell sx={{ width: "40px" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.from(values).map((value, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{value.item}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: (theme) => theme.spacing(12),
                      }}
                    >
                      <IconButton
                        onClick={() => {
                          setActiveDialog(true)
                        }}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <ConfirmationDialog
        title="Delete Record"
        subtitle="Are you sure?"
        isOpen={activeDialog}
        cancelText="Cancel"
        confirmText="Delete Record"
        icon={DeleteIcon}
        onCancel={() => setActiveDialog(false)}
        onSubmit={() => {
          handleDelete(values)
          setActiveDialog(false)
        }}
      />
    </>
  );
};

export default TodoItemTable;
