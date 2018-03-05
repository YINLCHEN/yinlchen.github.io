import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import {blueGrey300, cyan50, white} from 'material-ui/styles/colors';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import ReactLogo from '../../images/ReactLogo.png';
import NodejsLogo from '../../images/NodejsLogo.png';
import JavaLogo from '../../images/JavaLogo.png';
import CsharpLogo from '../../images/csharp.svg';
import CICDLogo from '../../images/CICDLogo.png';
import GitLogo from '../../images/gitLogo.png';

const styles = {
    tab: {
        backgroundColor: blueGrey300
    },
    slide: {
        padding: 10
    },
    list:{
        color: cyan50
    }
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
        skillLogo: JavaLogo
    },
    {
        skillName: 'C#',
        skillLogo: CsharpLogo
    }
]
const CSSkillData = [
    {
        skillName: 'CI/CD',
        skillLogo: CICDLogo
    },
    {
        skillName: 'git',
        skillLogo: GitLogo
    }
]

function SkillChip(props) {
    const skills = props.skill;
    const listItems = skills.map((skill,index) =>
        <ListItem 
            style={styles.list} 
            key={index} 
            disabled={true} 
            leftAvatar={<Avatar src={skill.skillLogo} 
            style={
                {backgroundColor:white}
            }/>}>
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
                <div style={styles.slide}>
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