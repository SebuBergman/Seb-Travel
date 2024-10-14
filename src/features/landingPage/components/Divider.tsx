import { motion } from "framer-motion";

import { AppRoutes } from "@config/routes";
import { Box, Link, Stack, Typography } from "@mui/material";
import { scrollEffect } from "@features/landingPage/effects";

import { Colors } from "@config/styles";
import BackgroundVector1 from "../assets/BackgroundVector1.png";
import BackgroundVector2 from "../assets/BackgroundVector2.png";
import Vector1 from "../assets/Vector9.png";
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
          width: "100%",
          height: "384px",
          px: { xs: "16px" },
        }}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
        position={"relative"}
      >
        <Stack
          sx={{ mt: { xs: "-40px" }, flex: 1 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h2"
            sx={{
              mb: { xs: 2, md: 3 },
              color: Colors.primaryGreen,
              fontSize: { xs: "30px", md: "50px" },
              lineHeight: { xs: "45px", md: "55px" },
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
            sx={{
              px: { xs: 2 },
              zIndex: 1,
              height: "56px",
              maxWidth: { md: "260px" },
            }}
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
          src={BackgroundVector2}
          sx={{
            width: "660px",
            height: "159px",
            position: "absolute",
            top: "2px",
            right: "-10px",
            display: { xs: "none", md: "flex" },
          }}
        />
        <Box
          component="img"
          src={Vector2}
          sx={{
            width: "152.3px",
            position: "absolute",
            top: { xs: "20px", md: "25px" },
            right: { xs: "-60px", md: "600px" },
          }}
        />
        <Box
          component="img"
          src={Vector3}
          sx={{
            width: "152.3px",
            top: { xs: "10px", md: "15px" },
            right: { xs: "-80px", md: "570px" },
            position: "absolute",
          }}
        />
        <Box
          component="img"
          src={BackgroundVector1}
          sx={{
            maxWidth: { xs: "603px", md: "761.15px" },
            position: "absolute",
            bottom: { xs: "35px", md: "60px" },
            left: { xs: "-160px", md: "-120px" },
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src={Vector1}
          sx={{
            width: "152.3px",
            position: "absolute",
            bottom: "25px",
            left: "440px",
            display: { xs: "none", md: "flex" },
          }}
        />
      </Box>
    </motion.div>
  );
}
