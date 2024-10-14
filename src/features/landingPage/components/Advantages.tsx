import { Colors } from "@config/styles";
import { Stack, Typography } from "@mui/material";

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import { scrollEffect } from "@features/landingPage/effects";
import { motion } from "framer-motion";

function Advantages() {
  return (
    <motion.div
      variants={scrollEffect}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Stack
        sx={{
          maxWidth: { md: "1720px" },
          mx: { xs: 0, md: 12.5 },
          mb: { xs: "33px", md: 18 },
        }}
        alignItems={"center"}
      >
        <Stack
          alignItems={"center"}
          sx={{ mb: { xs: 2, md: 8 }, maxWidth: { md: "1720px" } }}
        >
          <Typography
            sx={{ color: Colors.primaryGreen, pb: { xs: 1 } }}
            variant="body2"
          >
            ADVANTAGES
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "26px", md: "40px" },
              fontWeight: "600",
              letterSpacing: "0.15px",
            }}
          >
            Why choose us?
          </Typography>
        </Stack>
        <Stack
          sx={{
            maxWidth: { md: "1506px" },
          }}
          direction={{ xs: "column", md: "row" }}
          gap={{ xs: 3, md: 10.5 }}
        >
          <Stack
            sx={{
              maxWidth: { md: "446px" },
            }}
            alignItems={"center"}
            textAlign={"center"}
            px={{ xs: 3, md: 4 }}
            py={{ xs: 3 }}
            gap={{ xs: 2, md: 4 }}
          >
            <Stack
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#046AAA",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <CameraAltOutlinedIcon
                sx={{ width: "32px", height: "32px", margin: "16px" }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "24px", md: "25px" },
                  lineHeight: { xs: "36px", md: "30px" },
                }}
                mb={{ xs: 2, md: 2 }}
              >
                Keep memories from the trip
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: { xs: "27px", md: "30px" },
                }}
              >
                Keeping your travel photos within your trip-planning app is
                incredibly practical.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              maxWidth: { md: "446px" },
            }}
            alignItems={"center"}
            textAlign={"center"}
            px={{ xs: 3, md: 4 }}
            py={{ xs: 3 }}
            gap={{ xs: 2, md: 4 }}
          >
            <Stack
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#046AAA",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <FmdGoodOutlinedIcon
                sx={{ width: "32px", height: "32px", margin: "16px" }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "24px", md: "25px" },
                  lineHeight: { xs: "36px", md: "30px" },
                }}
                mb={{ xs: 2, md: 2 }}
              >
                Add places you want to visit
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: { xs: "27px", md: "30px" },
                }}
              >
                Our user-friendly tools help you plan and organize your packing
                with ease.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              maxWidth: { md: "446px" },
            }}
            alignItems={"center"}
            textAlign={"center"}
            px={{ xs: 3, md: 4 }}
            py={{ xs: 3 }}
            gap={{ xs: 2, md: 4 }}
          >
            <Stack
              style={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#046AAA",
                color: "white",
                borderRadius: "8px",
              }}
            >
              <FolderCopyOutlinedIcon
                sx={{ width: "32px", height: "32px", margin: "16px" }}
              />
            </Stack>
            <Stack>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "24px", md: "25px" },
                  lineHeight: { xs: "36px", md: "30px" },
                }}
                mb={{ xs: 2, md: 2 }}
              >
                Centralize all your documents
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  lineHeight: { xs: "27px", md: "30px" },
                }}
              >
                Simplify Your Life by Bringing Together All Your Essential
                Documents and Files in a Single, Easily Accessible Location.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export default Advantages;
