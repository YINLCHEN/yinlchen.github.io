import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import {
    Link
} from 'react-router-dom'

const AboutIcon = (props) => (   
    <SvgIcon {...props}>
    {
    <path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"/>
    }
    </SvgIcon>
)

const ResumeIcon = (props) => (   
    <SvgIcon {...props}>
    {
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"/>
    }
    </SvgIcon>
)

const PortfolioIcon = (props) => (   
    <SvgIcon {...props}>
    {
        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    }
    </SvgIcon>
)

const GitHubIcon = (props) => (
    <SvgIcon {...props}>
        {
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        }
    </SvgIcon>
);

const YoutubeIcon = (props) => (
    <SvgIcon {...props}>
        {
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        }
    </SvgIcon>
);



const styles = {
    button: {
        margin: 15,
    }
};

const RaisedButtonExampleComplex = () => (
    <div>
        <RaisedButton
            label="About"
            secondary={true}
            style={styles.button}
            icon={<AboutIcon />}
            containerElement={<Link to="/about"/>}
        />

        <RaisedButton
            label="Resume"
            secondary={true}
            style={styles.button}
            icon={<ResumeIcon />}
            containerElement={<Link to="/resume"/>}
        />
        
        <RaisedButton
            label="Portfolio"
            secondary={true}
            style={styles.button}
            icon={<PortfolioIcon />}
            containerElement={<Link to="/portfolio"/>}
        />

        <RaisedButton
            target="_blank"
            label="Github Link"
            secondary={true}
            style={styles.button}
            icon={<GitHubIcon />}
            containerElement={<Link to="https://github.com/YINLCHEN"/>}
        />

        <RaisedButton
            target="_blank"
            label="YOUTUBER"
            secondary={true}
            style={styles.button}
            icon={<YoutubeIcon />}
            containerElement={<Link to="https://www.youtube.com/channel/UC89XiJd0AkUtptX3uT6hfIw"/>}
        />
    </div>
);

export default RaisedButtonExampleComplex;