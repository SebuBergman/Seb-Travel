import { motion } from "framer-motion";

import { AppRoutes } from "@config/routes";
import { Box, Link, Stack, Typography } from "@mui/material";
import { scrollEffect } from "@app/effects";

import { Colors } from "@config/styles";
import BackgroundVector1 from "../assets/Background.png";
import Vector1 from "../assets/Vector9.png";
import BackgroundVector2 from "../assets/Vector11.png";
import Vector2 from "../assets/Vector12.png";
import Vector3 from "../assets/Vector13.png";
import AppButton from "@features/ui/AppButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Divider() {
  return (
    <motion.div
      variants={scrollEffect}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: Colors.secondaryGreen,
          maxWidth: "1920px",
          height: "384px",
          px: { xs: "16px" },
        }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Box
          component="img"
          src={BackgroundVector2}
          sx={{
            width: "660px",
            height: "159px",
            position: "relative",
            left: "600px",
            top: "20px",
            display: { xs: "none" },
          }}
        />
        <Box
          component="img"
          src={Vector2}
          sx={{
            width: "152.3px",
            height: "92.79px",
            position: "relative",
            left: { xs: "200px", md: "650px" },
            bottom: { xs: "-60px", md: "100px" },
          }}
        />
        <Box
          component="img"
          src={Vector3}
          sx={{
            width: "152.3px",
            height: "92.79px",
            position: "relative",
            left: { xs: "220px", md: "650px" },
            bottom: { xs: "35px", md: "100px" },
          }}
        />
        <Stack sx={{ mt: { xs: "-40px" } }}>
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 2, mb: 3 },
              color: Colors.primaryGreen,
              fontSize: { xs: "30px" },
              lineHeight: { xs: "45px" },
              letterSpacing: { xs: "0.15px" },
            }}
          >
            Let’s plan your next trip together?
          </Typography>
          <AppButton
            LinkComponent={Link}
            href={AppRoutes.addTrip}
            endIcon={<ArrowForwardIcon />}
            fullWidth
            sx={{ px: { xs: 2 }, zIndex: 1, height: { xs: "56px" } }}
          >
            <Typography
              variant="body2"
              sx={{
                lineHeight: { xs: "27px" },
                letterSpacing: { xs: "0.15px" },
                py: { xs: "14.5px" },
              }}
            >
              Plan your trip
            </Typography>
          </AppButton>
        </Stack>
        <Box
          component="img"
          src={BackgroundVector1}
          sx={{
            maxWidth: "761.15px",
            position: "relative",
            right: { xs: "160px", md: "650px" },
            bottom: { xs: "50px", md: "100px" },
          }}
        />
        <Box
          component="img"
          src={Vector1}
          sx={{
            width: "152.3px",
            height: "92.79px",
            position: "relative",
            left: "500px",
            display: { xs: "none" },
          }}
        />
      </Box>
    </motion.div>
  );
}
