import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import type { WizardSteps } from "../../types";
import { useBreakpoints } from "@hooks/useBreakpoints";

interface Props {
  currentStep: number;
  steps: WizardSteps[];
}

export default function DesktopStepper({ currentStep, steps }: Props) {
  const { xl } = useBreakpoints();

  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel={!xl}
      sx={{ display: { xs: "none", lg: "flex" }, mb: 8 , ml: -1}}
    >
      {steps.map(({ title }) => (
        <Step key={title}>
          <StepLabel
            StepIconProps={{
              sx: { height: { xs: 35, xl: 49 }, width: { xs: 35, xl: 49 } },
            }}
          >
            {title}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
