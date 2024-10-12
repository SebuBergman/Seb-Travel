import { motion } from "framer-motion";

import { scrollEffect } from "@app/effects";
import { Colors } from "@config/styles";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "@features/ui/logo/Logo";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
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
          maxWidth: "209px",
          mx: "auto",
          textAlign: "center",
          mb: 3,
          mt: 3,
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack sx={{ mb: { xs: 2 } }}>
          <Logo />
        </Stack>
        <Stack
          sx={{ flexDirection: "column", mx: "auto" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
        >
          <Stack
            sx={{ flexDirection: "column", mx: "auto" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="body1" sx={{ mb: { xs: 1, mb: 0.5 } }}>
              Get in touch
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Contact us anytime for getting support
            </Typography>
          </Stack>
          <Stack
            sx={{ flexDirection: "column", mx: "auto" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography variant="body1" sx={{ mb: { xs: 1, mb: 1 } }}>
              contact@sebtravel.com
            </Typography>
            <Stack sx={{ flexDirection: "row" }} gap={1}>
              <Stack
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "32px",
                  width: "32px",
                  backgroundColor: Colors.secondaryGreen,
                  borderRadius: "4px",
                }}
              >
                <InstagramIcon
                  sx={{
                    width: "24px",
                    height: "24px",
                    color: Colors.primaryGreen,
                  }}
                />
              </Stack>
              <Stack
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "32px",
                  width: "32px",
                  backgroundColor: Colors.secondaryGreen,
                  borderRadius: "4px",
                }}
              >
                <FacebookIcon
                  sx={{
                    width: "24px",
                    height: "24px",
                    color: Colors.primaryGreen,
                  }}
                />
              </Stack>
              <Stack
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: "32px",
                  width: "32px",
                  backgroundColor: Colors.secondaryGreen,
                  borderRadius: "4px",
                }}
              >
                <TwitterIcon
                  sx={{
                    width: "24px",
                    height: "24px",
                    color: Colors.primaryGreen,
                  }}
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default Footer;
