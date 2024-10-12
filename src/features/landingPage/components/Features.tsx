import { Colors } from '@config/styles';
import AppButton from '@features/ui/AppButton';
import { Box, Stack, Typography } from '@mui/material';

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import GalleryImage from "../assets/Gallery.png";
import ExpensesImage from "../assets/Expenses.png";

export default function Features() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: { md: "1720px" },
        mx: "auto",
        mb: { xs: "32px", md: "161px" },
      }}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ mb: { xs: 4, md: 8 } }}
      >
        <Typography
          sx={{ color: Colors.primaryGreen, pb: { xs: 1 } }}
          variant="body2"
        >
          FEATURES
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "40px" },
            fontWeight: "bold",
            letterSpacing: "0.15px",
          }}
        >
          SebTravel best solution for travel
        </Typography>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pr: { xs: 2, md: 0 },
          pl: { xs: 2, md: 0 },
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ xs: "24px", md: "260px" }}
      >
        <Stack>
          <img
            src={GalleryImage}
            alt={"Big city view."}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "810px",
              maxHeight: "630px",
              borderRadius: "40px",
            }}
          />
        </Stack>
        <Stack
          sx={{
            maxWidth: "650px",
          }}
          justifyContent={"center"}
        >
          <Typography
            sx={{ color: Colors.primaryGreen, mb: { xs: 2, mb: 1 } }}
            variant="body2"
          >
            DASHBOARD
          </Typography>
          <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
            Organize All Your Trips in a Single Application
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, mb: 3 } }}
          >
            With our intuitive application, you can effortlessly organize all
            your trips in one convenient location. From itinerary details and
            booking confirmations to travel notes and essential documents,
            everything you need for a smooth and stress-free journey is just a
            tap away. Enjoy a clutter-free travel experience and stay in control
            of your adventures with ease.
          </Typography>
          <AppButton
            endIcon={<ArrowForwardIcon />}
            sx={{ width: { xs: "100%", md: "260px" } }}
          >
            Plan your trip
          </AppButton>
        </Stack>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pr: { xs: 2, md: 0 },
          pl: { xs: 2, md: 0 },
          margin: { xs: "32px 0px 32px 0px", md: "72px 0px 72px 0px" },
        }}
      >
        <hr
          style={{
            height: 1,
            width: "100%",
            border: "1px solid rgba(234, 234, 234, 1)",
          }}
        ></hr>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          pr: { xs: 2, md: 0 },
          pl: { xs: 2, md: 0 },
        }}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={{ xs: "24px", md: "260px" }}
      >
        <Stack sx={{ maxWidth: "650px", mb: { xs: 4, mb: 0 } }}>
          <Typography
            sx={{ color: Colors.primaryGreen, mb: { xs: 2, mb: 1 } }}
            variant="body2"
          >
            EXPENSES
          </Typography>
          <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
            Expense Tracking for Your Travels
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, mb: 3 } }}
          >
            Keep a Close Watch on Your Travel Costs with our User-Friendly
            Expense Tracking Solution. Set budget goals, receive real-time
            updates, and make informed decisions to ensure you get the most out
            of your travel experiences without any financial surprises. Travel
            with confidence, knowing that your expenses are well-managed and
            under control
          </Typography>
          <AppButton
            endIcon={<ArrowForwardIcon />}
            sx={{ width: { xs: "100%", md: "260px" } }}
          >
            Plan your trip
          </AppButton>
        </Stack>
        <Stack sx={{ flexGrow: "50%" }}>
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
              padding: { md: "10px 10px 10px 10px" },
              borderRadius: "40px",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
}