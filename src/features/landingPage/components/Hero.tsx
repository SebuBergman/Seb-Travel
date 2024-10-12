import { AppRoutes } from "@config/routes";
import { motion } from "framer-motion";

import { scrollEffect } from "@app/effects";
import { Box, Link, Stack, Typography } from "@mui/material";
import AppButton from "@features/ui/AppButton";

import { LANDING_PAGE_ELLIPSE_IMAGES } from "../data";

import Image1 from "../assets/image1.jpeg";
import Image2 from "../assets/image2.jpeg";
import Image3 from "../assets/image3.jpeg";
import BackgroundVector1 from "../assets/Background.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


export default function Hero() {
  return (
    <motion.div
      variants={scrollEffect}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: 4,
          alignItems: "center",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
        mt={4}
        mb={{ xs: "68.34px", md: "76px" }}
        mx={{ md: "100px" }}
      >
        <Stack
          sx={{
            flexDirection: "column",
            maxHeight: { md: "636px" },
            maxWidth: { md: "668px" },
            px: { xs: 2 },
          }}
          gap={{ xs: 6, md: 20 }}
        >
          <Stack gap={5}>
            <Box
              component="img"
              src={BackgroundVector1}
              alt={"Big city view."}
              loading="lazy"
              sx={{
                position: "relative",
                top: "-150px",
                left: "-155px",
                borderRadius: "0px 40px 40px 0px",
                overflow: "hidden",
                objectFit: "cover",
                display: { xs: "none", md: "flex" },
              }}
            />
            <Stack gap={2} textAlign={{ xs: "center", md: "left" }}>
              <Typography
                sx={{
                  fontSize: { xs: "32px", md: "60px" },
                  lineHeight: { md: "70px" },
                  fontWeight: "bold",
                  letterSpacing: "0.15px",
                }}
              >
                Your Ultimate Trip Companion
              </Typography>
              <Typography color="text.secondary" variant="body1">
                Welcome to SebTravel - Your Passport to Seamless Adventures!
                Discover, plan, and track your journeys effortlessly with our
                intuitive web application. Start exploring now!
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexBasis: "50%",
              }}
              gap={2}
            >
              <AppButton
                LinkComponent={Link}
                href={AppRoutes.addTrip}
                fullWidth
                endIcon={<ArrowForwardIcon />}
                sx={{ mb: { md: 2 } }}
              >
                Plan your trip
              </AppButton>
              <AppButton
                fullWidth
                variant={"outlined"}
                sx={{ mb: 2, display: { xs: "none", md: "inline-flex" } }}
              >
                Learn more
              </AppButton>
            </Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              borderTop: "1px solid rgba(234, 234, 234, 1)",
              borderBottom: "1px solid rgba(234, 234, 234, 1)",
            }}
            alignItems={{ xs: "center" }}
            justifyContent={{ xs: "center", md: "left" }}
            minWidth={{ md: 668 }}
            py={{ xs: 2, md: 3 }}
          >
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
              }}
              alignItems={{ xs: "right", md: "right" }}
              justifyContent={{ xs: "center" }}
            >
              <Stack
                sx={{
                  flexDirection: "row",
                }}
                alignItems={{ xs: "center" }}
                gap={{ xs: 10, md: 2 }}
              >
                <Typography variant="h5" py={0.625} mr={{ xs: 4, md: 2 }}>
                  1200+ users
                </Typography>
                <Stack sx={{ flexDirection: "row" }} mr={2}>
                  {LANDING_PAGE_ELLIPSE_IMAGES.map((item) => (
                    <img
                      key={`${item.id}`}
                      src={`${item.src}`}
                      alt={item.alt}
                      loading="lazy"
                      style={{
                        width: "55px",
                        height: "55px",
                        border: "1px",
                        borderRadius: "30px",
                        marginLeft: "-16px",
                      }}
                    />
                  ))}
                </Stack>
              </Stack>
              <Stack>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ width: { md: 167 } }}
                >
                  Track their trips in our App.
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{ display: "flex", marginLeft: { xs: "auto" } }}
          flex-grow={1}
          gap={{ md: 3 }}
        >
          <Stack gap={3}>
            <Box
              component="img"
              src={Image1}
              alt={"Trailer in a park."}
              loading="lazy"
              sx={{
                minHeight: { md: "451px" },
                maxWidth: { md: "403px" },
                width: { xs: "100%" },
                borderRadius: "40px",
                objectFit: "cover",
                mb: { xs: "24px", md: 0 },
                px: { xs: "15px", md: 0 },
              }}
            />
            <Box
              component="img"
              src={Image2}
              alt={"Beautiful sandy beach with trees."}
              loading="lazy"
              sx={{
                minHeight: { md: "451px" },
                maxWidth: { md: "403px" },
                borderRadius: "40px",
                objectFit: "cover",
                display: { xs: "none", md: "flex" },
              }}
            />
          </Stack>
          <Stack>
            <Box
              component="img"
              src={Image3}
              alt={"Big city view."}
              loading="lazy"
              sx={{
                maxWidth: { md: "364px" },
                minHeight: { md: "926px" },
                borderRadius: "0px 40px 40px 0px",
                overflow: "hidden",
                objectFit: "cover",
                display: { xs: "none", md: "flex" },
              }}
            />
          </Stack>
        </Box>
      </Box>
    </motion.div>
  );
}
