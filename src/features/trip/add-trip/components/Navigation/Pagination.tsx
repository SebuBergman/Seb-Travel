import MobileStepper from "@mui/material/MobileStepper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import AppButton from "@features/ui/AppButton";
import { useBreakpoints } from "@hooks/useBreakpoints";

import { WIZARD_STEPS } from "../../data";
import { useAppDispatch, useAppSelector } from "@store/index";
import { prevStep, selectCurrentStep } from "../../store/tripWizardSlice";


export default function Pagination() {
  const dispatch = useAppDispatch();
  const { md, lg } = useBreakpoints();
  const currentStep = useAppSelector(selectCurrentStep);

  const onBackButtonClick = () => dispatch(prevStep());

  return (
    <MobileStepper
      variant={lg ? "dots" : "text"}
      steps={WIZARD_STEPS.length}
      position="static"
      activeStep={currentStep}
      nextButton={
        <AppButton fullWidth={!md} type="submit" endIcon={<ArrowForwardIcon />}>
          Next
        </AppButton>
      }
      backButton={
        <AppButton
          onClick={onBackButtonClick}
          fullWidth={!md}
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{ visibility: currentStep === 0 ? "hidden" : "visible" }}
        >
          Back
        </AppButton>
      }
      sx={{
        // Took away stepper dots/numbers for desktop browsers
        ".MuiMobileStepper-dots": {
          visibility: "hidden",
        },
        display: "flex",
        gap: 2,
        whiteSpace: "nowrap",
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        p: { xs: 2, lg: 3 },
        borderRadius: 4,
      }}
    />
  );
}
