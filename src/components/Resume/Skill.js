import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {blueGrey300} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import ReactLogo from '../../images/ReactLogo.png';
import NodejsLogo from '../../images/NodejsLogo.png';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const styles = {
    tab: {
        backgroundColor: blueGrey300
    },
    slide: {
    padding: 10,
    },
};

const FrontSkillData = [
    {
        skillName: 'ReactJS',
        skillLogo: ReactLogo
    },

    {
        skillName: 'NodeJs',
        skillLogo: NodejsLogo
    }
]
const BackSkillData = [
    {
        skillName: 'Java',
        skillLogo: ReactLogo
    },

    {
        skillName: 'C#',
        skillLogo: NodejsLogo
    }
]
const CSSkillData = [
    {
        skillName: 'CI/CD',
        skillLogo: ReactLogo
    },

    {
        skillName: 'git',
        skillLogo: NodejsLogo
    }
]

function SkillChip(props) {
    const skills = props.skill;
    const listItems = skills.map((skill,index) =>
        <ListItem key={index} disabled={true} leftAvatar={<Avatar src={skill.skillLogo}/>}>
        {skill.skillName}
        </ListItem>
    );
    return (
        <List>{listItems}</List>
    );
  }

export default class Skill extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };
    
    render() {
        return (
            <div>
                <Tabs
                    onChange={this.handleChange}
                    value={this.state.slideIndex}
                >
                    <Tab style={styles.tab} label="Front-end" value={0} />
                    <Tab style={styles.tab} label="Back-end" value={1} />
                    <Tab style={styles.tab} label="軟體工程" value={2} />
                </Tabs>
                <SwipeableViews
                    index={this.state.slideIndex}
                    onChangeIndex={this.handleChange}
                >
                <div>
                    <SkillChip skill={FrontSkillData} />
                </div>
                <div style={styles.slide}>
                    <SkillChip skill={BackSkillData} />
                </div>
                <div style={styles.slide}>
                    <SkillChip skill={CSSkillData} />
                </div>
            </SwipeableViews>
            </div>
        );
    }
}