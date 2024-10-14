import { motion } from "framer-motion";

import { AppRoutes } from "@config/routes";
import { Colors } from "@config/styles";
import { scrollEffect } from "@features/landingPage/effects";
import AppButton from "@features/ui/AppButton";
import { Box, Link, Stack, Typography } from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import GalleryImage from "../assets/Gallery.png";
import ExpensesImage from "../assets/Expenses.png";
import { FontWeights } from "@app/config/styles/FontWeights";

export default function Features() {
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
          maxWidth: { md: "1720px" },
          mx: { xs: 2, md: 12.5 },
          mb: { xs: 4, md: "161px" },
        }}
      >
        <motion.div
          variants={scrollEffect}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Stack alignItems={"center"} sx={{ mb: { xs: 4, md: 8 } }}>
            <Typography
              sx={{ color: Colors.primaryGreen, pb: { xs: 1 } }}
              variant="body2"
            >
              FEATURES
            </Typography>
            <Typography
            variant="h4"
              sx={{
                fontSize: { xs: "26px", md: "40px" },
                letterSpacing: "0.15px",
              }}
              fontWeight={FontWeights.semibold}
            >
              SebTravel best solution for travel
            </Typography>
          </Stack>
          <Stack
            sx={{
              pr: { xs: 2, md: 0 },
              pl: { xs: 2, md: 0 },
            }}
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ xs: 3 }}
          >
            <Stack>
              <Box
                component="img"
                src={GalleryImage}
                alt={"Big city view."}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "810px",
                  maxHeight: "630px",
                  padding: { md: "10px" },
                  borderRadius: "40px",
                }}
              />
            </Stack>
            <Stack
              sx={{
                maxWidth: "650px",
              }}
            >
              <Typography
                variant="body2"
                color={Colors.primaryGreen}
                mb={{ xs: 2, md: 1 }}
              >
                DASHBOARD
              </Typography>
              <Typography
                variant="h4"
                mb={{ xs: 2, md: 3 }}
                sx={{
                  fontSize: {
                    xs: "24px",
                    md: "35px",
                    lineHeight: { xs: "36px", md: "50px" },
                  },
                }}
              >
                Organize All Your Trips in a Single Application
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                mb={{ xs: 2, md: 3 }}
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "20px",
                    lineHeight: { xs: "27px", md: "30px" },
                  },
                }}
              >
                With our intuitive application, you can effortlessly organize
                all your trips in one convenient location. From itinerary
                details and booking confirmations to travel notes and essential
                documents, everything you need for a smooth and stress-free
                journey is just a tap away. Enjoy a clutter-free travel
                experience and stay in control of your adventures with ease.
              </Typography>
              <AppButton
                LinkComponent={Link}
                href={AppRoutes.addTrip}
                endIcon={<ArrowForwardIcon />}
                sx={{ width: { xs: "100%", md: "260px" } }}
              >
                Plan your trip
              </AppButton>
            </Stack>
          </Stack>
        </motion.div>
        <Stack
          sx={{
            pr: { xs: 2, md: 0 },
            pl: { xs: 2, md: 0 },
          }}
          direction={{ xs: "column", md: "row" }}
          m={{ xs: "32px 0px", md: "72px 0px" }}
        >
          <hr
            style={{
              width: "100%",
              border: "1px solid #EAEAEA",
            }}
          ></hr>
        </Stack>

        <motion.div
          variants={scrollEffect}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Stack
            sx={{
              pr: { xs: 2, md: 0 },
              pl: { xs: 2, md: 0 },
            }}
            direction={{ xs: "column-reverse", md: "row" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={{ xs: 3 }}
          >
            <Stack sx={{ maxWidth: "650px", mb: { xs: 4, md: 0 } }}>
              <Typography
                variant="body2"
                color={Colors.primaryGreen}
                mb={{ xs: 2, md: 1 }}
              >
                EXPENSES
              </Typography>
              <Typography
                variant="h4"
                mb={{ xs: 2, md: 3 }}
                sx={{
                  fontSize: {
                    xs: "24px",
                    md: "35px",
                    lineHeight: { xs: "36px", md: "50px" },
                  },
                }}
              >
                Expense Tracking for Your Travels
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                mb={{ xs: 2, md: 3 }}
              >
                Keep a Close Watch on Your Travel Costs with our User-Friendly
                Expense Tracking Solution. Set budget goals, receive real-time
                updates, and make informed decisions to ensure you get the most
                out of your travel experiences without any financial surprises.
                Travel with confidence, knowing that your expenses are
                well-managed and under control
              </Typography>
              <AppButton
                LinkComponent={Link}
                href={AppRoutes.addTrip}
                endIcon={<ArrowForwardIcon />}
                sx={{ width: { xs: "100%", md: "260px" } }}
              >
                Plan your trip
              </AppButton>
            </Stack>
            <Stack>
              <Box
                component="img"
                src={ExpensesImage}
                alt={"Big city view."}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: "100%",
                  maxWidth: "810px",
                  maxHeight: "630px",
                  padding: { md: "10px" },
                  borderRadius: "40px",
                }}
              />
            </Stack>
          </Stack>
        </motion.div>
      </Box>
    </motion.div>
  );
}
