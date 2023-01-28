export interface IStepper {
    activeStep: number;
    steps: number; 
    handleNext: () => void; 
    handleBack: () => void;
}