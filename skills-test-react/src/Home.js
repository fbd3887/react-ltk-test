import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AccountMenu from "./AccountMenu";
import BasicForm from "./BasicForm";

const Home = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/todo");
  };
  return (
    <Box>
      <AccountMenu onClick={handleOnClick} />
      <Box sx={{ margin: "30px 40px" }}>
        <Routes>
          <Route
            path="/"
            element={
              <Typography variant="h4" component="h1" gutterBottom>
                React Skills test
              </Typography>
            }
          ></Route>
          <Route path="/todo" element={<BasicForm />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default Home;
