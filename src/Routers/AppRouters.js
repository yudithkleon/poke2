import React, {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch
  } from "react-router-dom";
import { DashBoardRouters } from "./DashBoardRouters";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { useDispatch } from "react-redux"
import { getAuth, onAuthStateChanged} from "@firebase/auth"
import Login from '../Components/Login/Login';
import { Registro } from '../Components/Login/Registro';
import { loginEmailPassword } from "../Components/Reducers/actions/actionLogin";


const AppRouters = () => {
    const dispatch = useDispatch();

    const [checking, setChecking]= useState(true);
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    
    useEffect(() => {
      const auth = getAuth()
      onAuthStateChanged(auth, (user) => {
          if (user?.uid) {
              dispatch(loginEmailPassword(user.uid, user.displayName))
              setIsLoggedIn(true)
          } else {
            setIsLoggedIn(false)
          }
          setChecking(false)
      })
    }, [dispatch, setChecking, setIsLoggedIn])
    
    
    if (checking){
      return(
        <h1>Espere....</h1>
      )
    }
    
    return (
        <Router>
        <Switch>
          <PublicRouter 
          
          path="/login"
          component={Login}
          isAuthenticated={isLoggedIn}/>

      <PublicRouter 
          
          path="/register"
          component={Registro}
          isAuthenticated={isLoggedIn}/>

          <PrivateRouter 
          path="/"
          component={DashBoardRouters}
          isAuthenticated={isLoggedIn}/>

        </Switch>
    </Router>
    )
}

export default AppRouters
