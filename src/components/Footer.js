import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#d6f3ff" style={{
    "margin-right": "-24px",
    "margin-left": "-24px"
  }}>
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="41px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by Veera Fitness
    </Typography>
  </Box>
);

export default Footer;
