import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles({
    dispProp:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },

// home page css
    mainContainer:{
        display:'flex', //new
        // width:'100vw',
        backgroundColor:'#14131A',
        // height:'100vh',
        flexWrap:'nowrap',
        alignItems:'flex-start'
    },
    sideContainer: {
        // width: '20%',
        width: '300px',
        height: '100vh',
        color: '#76767C',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },    
    mainPanel:{
        flexGrow:1,
        // width:'80%',
        // width:'70%',
        height:'100vh'        
    },
// side panel css
    sideVerticalBox:{
        width:'240px',
        height:'80vh',
        backgroundColor:'#1C1B23',
        borderRadius:'7px',
        padding:'10px'
    },
    sideIcons:{
        color:'#76767C',
        fontSize:'25px'
    },
    listItems:{
        paddingBottom:'15px',       
    },
// main panel css
    BtnIcons:{  
        color:'#fff',

    },
    // profileImgdiv:{
    //     backgroundColor:'#000',
    //     border:'4px solid #fff',
    //     width:'10%',
    //     backgroundColor:'yellow'
    // },
    bannerText:{
        width:'90%',
        // backgroundColor:'gray',
        display:'flex',
        justifyContent:'space-between',
        // padding:'0px 50px 0px',
        color:'#fff'
    },   
    profileImg:{
        objectFit:'cover',
        width: '112px',
        height: '112px',
        borderRadius: '50%',
        border:'solid 4px #fff'
    },
// MenuIcon
    MenuIcon:{
        color:'#fff',
        fontSize:'30px',
    },
    customMenu:{
        background:'#1C1B2380'
    }
})
