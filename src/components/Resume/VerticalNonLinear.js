import React from 'react';
import {cyan50} from 'material-ui/styles/colors';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';

class VerticalNonLinear extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            stepIndex: 0
        };
    }

    componentDidMount(){
        window.addEventListener('scroll',()=>{
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            console.log(scrollTop);

            if(scrollTop <= 400){
                this.setState({stepIndex: 0});
            }
            else if(scrollTop> 400 && scrollTop <= 500){
                this.setState({stepIndex: 1});
            }
            else if(scrollTop >= 700){
                this.setState({stepIndex: 2});
            }
            
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.props
        });
     }

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
        const data = this.state.data;
        const element =  
            Object.keys(data).map((Rkey,Rindex) =>
                Object.keys(data[Rkey].ProjectExperience).map( (Wkey, Windex) => {
                    const num = [0,1,2];
                    return (
                        <Step key={Wkey} style={{color: 'white'}}>
                            <StepButton onClick={() => this.setState({stepIndex: num[Windex] } )}>
                                <p style={{color:cyan50}} >
                                    {data[Rkey].ProjectExperience[Wkey].Title}
                                </p>
                            </StepButton>
                            <StepContent>
                                <p>
                                    {data[Rkey].ProjectExperience[Wkey].Describe}
                                </p>
                            </StepContent>
                        </Step>
                    )
                })
            );

        return (
        <div style={{maxWidth: 380, maxHeight: 400, margin: 'left'}}>
            <Stepper
                activeStep={stepIndex}
                linear={false}
                orientation="vertical"
            >
            {element}
            </Stepper>
        </div>
        );
    }
}

export default VerticalNonLinear;