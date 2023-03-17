import React from "react";
import { Formik, Field, Form, useFormik } from "formik";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import * as yup from "yup";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import store from "./store/configureStore";
import { submitValues } from "./actions/actions";
import TodoItemTable from "./Table/TodoItemTable"

const BasicForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const existingValues = useSelector((state) => state?.form?.values);
  const validationSchema = yup.object().shape({
    item: yup.string().required("Please enter the item"),
  });

  const formik = useFormik({
    initialValues: {
      item: "",
    },
    validationSchema,
    onSubmit: (values) => {
      let shouldSubmit = true;
      if (
        typeof existingValues === "object" &&
        Array.isArray(Object.values(existingValues))
      ) {
        const valuesArray = Object.values(existingValues);
        valuesArray.forEach((value) => {
          if (value.item === values.item) {
            enqueueSnackbar("Record Already Exisits", {
              variant: "error",
              anchorOrigin: { vertical: "top", horizontal: "right" },
            });
            shouldSubmit = false;
          }
        });
      }

      if (shouldSubmit) {
        enqueueSnackbar("Record Succesfully Added", {
          variant: "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
        });
        store.dispatch(submitValues(values));
        formik.resetForm();
      }
    },
  });

  return (
    <Stack direction="column" spacing={5}>
      <Typography>Table</Typography>
      <Box
        sx={{ width: "500px", mt: 6, display: "flex", gap: "20px"}}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          fullWidth
          type="text"
          name="item"
          size="small"
          onChange={formik.handleChange}
          error={formik.touched.item && formik.values.item === ""}
          helperText={formik.touched.item && formik.values.item === ""}
          value={formik.values.item}
          inputProps={{
            startAdornment: <SearchIcon sx={{mr: 1}} />
          }}
          placeholder="Add"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{backgroundColor: 'blue'}}
        >
          Add
        </Button>
      </Box>
      <TodoItemTable />
    </Stack>
  );
};

export default BasicForm;
