import { Colors } from '@config/styles';
import { Stack, Typography } from '@mui/material';

import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";

function Advantages() {
  return (
    <Stack
      sx={{
        width: { md: "1720px" },
        mx: { md: "auto" },
        mb: { xs: "33px", md: "144px" },
      }}
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
          flexDirection: { xs: "column", md: "row" },
          maxWidth: { md: "1506px" },
          mx: { md: "auto" },
        }}
        justifyContent={"space-between"}
        alignContent={"center"}
        gap={{ xs: "24px", md: "84px" }}
      >
        <Stack
          sx={{
            maxWidth: { md: "446px" },
            display: "flex",
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
              height: "64px",
              width: "64px",
              backgroundColor: "#046AAA",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <CameraAltOutlinedIcon
              sx={{ width: "24px", height: "24px", border: "2px" }}
            />
          </Stack>
          <Stack>
            <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
              Keep memories from the trip
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Keeping your travel photos within your trip-planning app is
              incredibly practical.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            maxWidth: { md: "446px" },
            display: "flex",
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
              height: "64px",
              width: "64px",
              backgroundColor: "#046AAA",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <FmdGoodOutlinedIcon
              sx={{ width: "24px", height: "24px", border: "2px" }}
            />
          </Stack>
          <Stack>
            <Typography variant="h4" sx={{ mb: { xs: 2, mb: 3 } }}>
              Add places you want to visit
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Our user-friendly tools help you plan and organize your packing
              with ease.
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            maxWidth: { md: "446px" },
            display: "flex",
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
              height: "64px",
              width: "64px",
              backgroundColor: "#046AAA",
              color: "white",
              borderRadius: "8px",
            }}
          >
            <FolderCopyOutlinedIcon
              sx={{ width: "24px", height: "24px", border: "2px" }}
            />
          </Stack>
          <Stack>
            <Typography
              variant="h4"
              sx={{
                mb: { xs: 2, mb: 3 },
              }}
            >
              Centralize all your documents
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Simplify Your Life by Bringing Together All Your Essential
              Documents and Files in a Single, Easily Accessible Location.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Advantages