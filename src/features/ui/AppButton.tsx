import { LoadingButton } from "@mui/lab";
import { type SxProps, type Theme, Typography } from "@mui/material";

interface Props {
  type?: "button" | "submit" | "reset";
  variant?: "text" | "contained" | "outlined";
  fullWidth?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  LinkComponent?: React.ElementType;
  href?: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export default function AppButton({
  type = "button",
  variant = "contained",
  fullWidth,
  loading,
  LinkComponent,
  href,
  children,
  startIcon,
  endIcon,
  sx,
  onClick,
}: Props) {
  return (
    <LoadingButton
      LinkComponent={LinkComponent}
      href={href}
      loading={loading}
      type={type}
      fullWidth={fullWidth}
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        height: { xs: 48, md: 56 },
        textTransform: "none",
        ...sx,
      }}
    >
      <Typography component="span" variant="body2">
        {children}
      </Typography>
    </LoadingButton>
  );
}
