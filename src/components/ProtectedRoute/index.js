import * as React from 'react'
import {Route} from 'react-router-dom'
import {Login} from '../Login/index'

export const ProtectedRoute = ({...props}) =>{
  if(window.isLoggedin){
    return <Route {...props} />
  } else
  {
    return <Route redirect="/login" component={Login} />
  }
};
