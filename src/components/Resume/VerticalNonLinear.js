import React from 'react';
import {cyan50} from 'material-ui/styles/colors';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';

class VerticalNonLinear extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'left'}}>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step style={{color: 'white'}}>
            <StepButton onClick={() => this.setState({stepIndex: 0})}>
                <p style={{color:cyan50}} >
                    Select campaign settings
                </p>
            </StepButton>
            <StepContent>
                <p>
                    For each ad campaign that you create, you can control how much
                    you're willing to spend on clicks and conversions, which networks
                    and geographical locations you want your ads to show on, and more.
                </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 1})}>
                <p style={{color:cyan50}} >
                    Create an ad group
                </p>
            </StepButton>
            <StepContent>
              <p>An ad group contains one or more ads which target a shared set of keywords.</p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onClick={() => this.setState({stepIndex: 2})}>
                <p style={{color:cyan50}} >
                    Create an ad
                </p>
            </StepButton>
            <StepContent>
                <p>
                    Try out different ad text to see what brings in the most customers,
                    and learn how to enhance your ads using features like ad extensions.
                    If you run into any problems with your ads, find out how to tell if
                    they're running and how to resolve approval issues.
                </p>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}

export default VerticalNonLinear;