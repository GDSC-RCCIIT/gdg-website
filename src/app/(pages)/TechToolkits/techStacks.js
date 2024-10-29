import {
    SiMongodb,
    SiNodedotjs,
    SiReact,
    SiExpress,
    SiAngular,
    SiJavascript,
    SiPython,
    SiVisualstudiocode,
    SiSublimetext,
    SiPycharm,
    SiGitforwindows,
    SiDocker,
    SiAwsamplify,
    SiAzuredevops,
    SiLinux,
    SiApache,
    SiPhp,
    SiMysql,
} from 'react-icons/si';

const techStacks = [
    {
        title: 'MERN Stack',
        icons: [
            { icon: <SiMongodb size={30} />, link: 'https://www.mongodb.com/docs/' },
            { icon: <SiNodedotjs size={30} />, link: 'https://nodejs.org/en/docs/' },
            { icon: <SiReact size={30} />, link: 'https://reactjs.org/docs/getting-started.html' },
            { icon: <SiExpress size={30} />, link: 'https://expressjs.com/en/starter/installing.html' },
        ],
    },
    {
        title: 'MEAN Stack',
        icons: [
            { icon: <SiMongodb size={30} />, link: 'https://www.mongodb.com/docs/' },
            { icon: <SiExpress size={30} />, link: 'https://expressjs.com/en/starter/installing.html' },
            { icon: <SiAngular size={30} />, link: 'https://angular.io/docs' },
            { icon: <SiNodedotjs size={30} />, link: 'https://nodejs.org/en/docs/' },
        ],
    },
    {
        title: 'LAMP Stack',
        icons: [
            { icon: <SiLinux size={30} />, link: 'https://www.linux.org/pages/download/' },
            { icon: <SiApache size={30} />, link: 'https://httpd.apache.org/docs/' },
            { icon: <SiMysql size={30} />, link: 'https://dev.mysql.com/doc/' },
            { icon: <SiPhp size={30} />, link: 'https://www.php.net/docs.php' },
        ],
    },
    {
        title: 'DevOps Tools',
        icons: [
            { icon: <SiDocker size={30} />, link: 'https://docs.docker.com/' },
            { icon: <SiGitforwindows size={30} />, link: 'https://gitforwindows.org/' },
        ],
    },
    {
        title: 'Cloud Platforms',
        icons: [
            { icon: <SiAwsamplify size={30} />, link: 'https://aws.amazon.com/documentation/' },
            { icon: <SiAzuredevops size={30} />, link: 'https://docs.microsoft.com/en-us/azure/' },
        ],
    },
    {
        title: 'Code Editors',
        icons: [
            { icon: <SiVisualstudiocode size={30} />, link: 'https://code.visualstudio.com/docs' },
            { icon: <SiSublimetext size={30} />, link: 'https://www.sublimetext.com/docs/' },
            { icon: <SiPycharm size={30} />, link: 'https://www.jetbrains.com/pycharm/docs/' },
        ],
    },
    {
        title: 'Programming Languages',
        icons: [
            { icon: <SiJavascript size={30} />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { icon: <SiPython size={30} />, link: 'https://www.python.org/doc/' },
        ],
    },
];

export default techStacks;