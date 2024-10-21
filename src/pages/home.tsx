import { Box } from "@mui/material";

import Header from "@features/ui/layout/Navbar/Header";
import Hero from "@features/landingPage/components/Hero";
import Features from "@features/landingPage/components/Features";
import Advantages from "@features/landingPage/components/Advantages";
import Divider from "@features/landingPage/components/Divider";
import Footer from "@features/landingPage/components/Footer";

export default function home() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", mx: "auto" }}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <Divider />
      <Footer />
    </Box>
  );
}
