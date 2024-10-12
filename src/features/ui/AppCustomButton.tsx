import { LoadingButton } from "@mui/lab";
import { type SxProps, type Theme, Typography } from "@mui/material";

interface Props {
  type?: "button" | "submit" | "reset";
  variant?: "text" | "contained" | "outlined";
  fullWidth?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  LinkComponent?: React.ElementType;
  href?: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: SxProps<Theme>;
  variantTypo?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "button";
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
  variantTypo,
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
        height: {
          xs: variant === "text" ? 42 : 48,
          md: variant === "text" ? 48 : 56,
        },
        textTransform: "none",
        width: fullWidth ? "100%" : "fit-content",
        ...sx,
      }}
    >
      <Typography component="span" variant="subtitle2">
        {children}
      </Typography>
    </LoadingButton>
  );
}
