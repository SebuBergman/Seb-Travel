import {
  Link,
  Stack,
  Typography,
} from "@mui/material";

import { AppRoutes } from "@config/routes";
import Logo from "@features/ui/logo/Logo";
import AppCustomButton from "@features/ui/AppCustomButton";

export default function Header() {
  return (
    <Stack
      sx={{ flexDirection: "row", height: "90px" }}
      justifyContent={{ xs: "flex-start", md: "space-between" }}
      px={{ xs: 2, md: 12.5 }}
    >
      <Stack py={1.875}>
        <Logo />
      </Stack>
      <Stack
        gap={{ md: 2 }}
        sx={{ marginLeft: { xs: "auto" }, flexDirection: "row" }}
      >
        <AppCustomButton
          fullWidth
          LinkComponent={Link}
          href={AppRoutes.login}
          sx={{ my: "21px", minWidth: "80px", padding: "12px 16px 12px 16px" }}
          variant={"outlined"}
        >
          <Typography variant="subtitle2" sx={{ my: "21px" }}>
            Log In
          </Typography>
        </AppCustomButton>
        <AppCustomButton
          fullWidth
          LinkComponent={Link}
          href={AppRoutes.signUp}
          sx={{
            my: "21px",
            minWidth: "96px",
            padding: "12px 16px 12px 16px",
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          <Typography variant="subtitle2" sx={{ my: "21px" }}>
            Sign Up
          </Typography>
        </AppCustomButton>
      </Stack>
    </Stack>
  );
}
