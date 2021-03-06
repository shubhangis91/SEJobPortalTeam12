import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Route, Link, BrowserRouter as Router,withRouter } from "react-router-dom";
import logo from '../img/logo2.png';
import {useCookies, setCookie,withCookies } from 'react-cookie';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MyNavBarRecruiter(props) {
   const [cookies, setCookie, removeCookie] = useCookies(['userEmail','userId','isActive']);

  const classes = useStyles();
   const logOut = () => {
    console.log("Logging out and removing cookies")
    console.log(cookies['userEmail'])
    console.log(cookies['userId'])
    console.log(cookies['isNotActive'])
    setCookie('isNotActive',false, { path: '/' })
    setCookie('userEmail',false, { path: '/' })
    setCookie('userId',undefined, { path: '/' })
    console.log(cookies['userEmail'])
    console.log(cookies['userId'])
    console.log(cookies['isNotActive'])
    pushToLogin()
  }
  const pushToLogin = () => {
    props.history.push("/");

  }
  const switchToUser = () => {
      props.history.push("/home")
  }
  useEffect(() => {checkLogin()},[])
  const checkLogin = () => {
    if(cookies['isNotActive']==false)    {
      pushToLogin()
    }
  }
  return (
    <div data-spy="scroll" data-target=".navbar" data-offset="50">
       <nav className="navbar navbar-expand-sm fixed-top navnav"style={{backgroundColor:"white",}}>
         <div style={{backgroundColor:"#e7717d",width:"100%"}}>
          <img src={logo}alt="mylogo" style={{width:"6%",marginLeft:"2.5%"}}/>
          <button onClick={logOut} style={{float:"right", backgroundColor:"#AFD275",height:"71px",color:"#7E685A"}}><strong>Log Out</strong></button>
          <button onClick={switchToUser} style={{float:"right", backgroundColor:"#AFD275",height:"71px",color:"#7E685A"}}><strong>Switch to User</strong></button>         
        </div>
      </nav>
    </div>
  )
}
export default withCookies( withRouter(MyNavBarRecruiter))