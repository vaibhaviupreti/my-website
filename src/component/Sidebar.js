import React from 'react'
import { useStyles } from '../style/CommonCSS'
import { List, ListItem, ListItemIcon, ListItemText,Typography,button } from '@mui/material';
// icons
import InboxIcon from '@mui/icons-material/MoveToInbox';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { Link } from 'react-router-dom';
export const Sidebar = () => {
  const classes = useStyles();
  const data = [
    {
      name: 'Home',
      icon: EmojiEmotionsOutlinedIcon, 
      url: '/home',
    },
    {
      name: 'Trending',
      icon: WhatshotOutlinedIcon,
      url: '/trending',
    },
    {
      name: 'Snippets',
      icon: CodeOutlinedIcon,
      url: '/snippets',
    },
    {
      name: 'Videos',
      icon: VideocamOutlinedIcon,
      url: '/videos',
    },
    
  ];
  const social =[{
    name: 'Instagram',
    icon: WhatshotOutlinedIcon,
    url: 'https://www.instagram.com',
  },
  {
    name: 'Github',
    icon: WhatshotOutlinedIcon,
    url: 'https://github.com',
  },
  {
    name: 'Youtube',
    icon: WhatshotOutlinedIcon,
    url: 'https://www.youtube.com',
  },
  {
    name: 'Linkedin',
    icon: WhatshotOutlinedIcon,
    url: 'https://www.linkedin.com',
  },
  {
    name: 'Stack Overflow',
    icon: WhatshotOutlinedIcon,
    url: 'https://stackoverflow.com',
  }
];

  return (
    <div>
      <div>
        VAIBHAVI
      </div>
      <div className={classes.sideVerticalBox}>
      <List>
          {data.map((item, index) => (
            <ListItem key={index} className={classes.listItems}>
              <ListItemIcon>
                <item.icon className={classes.sideIcons} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Typography style={{ margin: '20px' }}>
          Socials
        </Typography>
        <div>
          {social.map((item, index) => (
            <a key={index} 
            href={item.url} 
            className={classes.listItems}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
            >
                <item.icon className={classes.sideIcons} />
              <span style={{fontSize:'14px',marginLeft:'8px'}}>
              {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
