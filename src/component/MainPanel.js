import { Button, Grid, IconButton,createTheme,useMediaQuery } from '@mui/material'
import React from 'react'
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import {useStyles} from '../style/CommonCSS'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import BasicMenu from './BasicMenu';

const MainPanel = () => {
    const classes = useStyles();
    const theme = createTheme({
        breakpoints: {
            values: {
                md: 1080, 
                sm: 778,
                xs: 612,
                xxs: 398
            },
        },
    });
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    const mobile = useMediaQuery(theme.breakpoints.down('xs'));
    const xsmall = useMediaQuery(theme.breakpoints.down('xxs'));



  return (
    <div>
        <Grid container style={{display:'flex',justifyContent:'center',flexDirection:'column',paddingRight:'10px'}}>
            <Grid item style={{display:'flex',flexDirection:'row-reverse',padding:mobile?'20px':'10px',height:'80px',alignItems:'center'}}>
            {!matches && (<BasicMenu/>)}
                <Button 
                    style={{
                        height:'40px',
                        width:mobile?'150px':'170px',
                        fontSize:mobile?'14px':'16px',
                        marginRight:'30px',
                        fontSize:mobile?'12px':'14px',
                    }} 
                    variant='contained' color="success">
                    <IconButton>
                        <RecentActorsOutlinedIcon style={{paddingLeft:'0px'}} className={classes.BtnIcons}/>
                    </IconButton>
                    Contact Me
                    </Button>                    
            </Grid>
            <Grid item className={classes.dispProp} style={{backgroundImage: `url('/asset/banner.png')`,padding:'20px',height:'165px'}}>
                <div>
                    <img src='/asset/coder.jpg' style={{width: mobile?'90px':'112px', height: mobile?'90px':'112px'}} className={classes.profileImg}/>
                </div>

                <div className={classes.bannerText} style={{padding:xsmall?'0px 30px 0px':'0px 50px 0px'}}>
                    <div>
                        <div style={{fontWeight:700,fontSize: mobile ? '25px': '36px',fontFamily:'Galada',fontStyle:'normal',wordSpacing:'1px',letterSpacing:2,lineHeight:'30px'}}>
                            Vaibhavi Upreti
                        </div>
                        <div style={{fontSize:mobile ? '14px' : '16px',fontWeight:'lighter'}}>@techhsavyy</div>
                    </div>
                    
                    <div style={{backgroundColor:'#1C1B23',height:'20px',padding:'10px 10px',color:'#76767C',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'4px',fontSize:'13px',fontWeight:400,cursor: 'pointer'}}>
                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize:mobile ? '22px' : '15px'}}/>
                        {matches && (
                            <div style={{marginLeft:'8px'}}>Follow me on Linkedin</div>
                        )}
                    </div>                    
                </div>
            </Grid>
           
        </Grid>
    </div>
  )
}

export default MainPanel