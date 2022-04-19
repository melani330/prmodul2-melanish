// import {Route, Redirect, RouteProps } from 'react-router-dom';
// import {useSelector} from "react-redux";
// import { ReactNode, useEffect } from 'react';
// import { useAppSelector, useAppDispatch } from '../../redux/hooks';
// import { setUser, deleteUser } from '../../redux/actions/user';
// import { API_BASE_URL } from '../../constants/spotify';
 import React from "react";
// import axios from "axios";
// import { Alert } from "@mui/material";


// interface IPrivateRouteProps extends RouteProps {
//     children: ReactNode;
// }
// const PrivateRoute = ({children, ...props}: IPrivateRouteProps) => {
//     const token = useAppSelector((state) => state.user.token);
//     const dispatch = useAppDispatch();
//     return (
//         <Route
//             {...props} render={() => 
//                 (token ? children : <Redirect to="/"/>)}/>
//     );
// };

// export default PrivateRoute;
import { ReactNode, useEffect } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { notification } from 'antd';
import axios from 'axios';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setUser } from '../../redux/actions/user';
import { API_BASE_URL } from '../../constants/spotify';

interface IPrivateRouteProps extends RouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children, ...props }: IPrivateRouteProps) => {
  const token = useAppSelector((state) => state.user.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      axios
        .get(`${API_BASE_URL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { display_name: displayName, email, id } = response.data;
          dispatch(setUser({ displayName, email, id }));
        })
        .catch((error) => {
          if (error.response.status === 400 || error.response.status === 401) {
            notification.error({
              message: 'Error',
              description:
                'There is something wrong, make sure you have been logged in!',
            });
          }
        });
    }
  }, [token]);

  return (
    <Route {...props} render={() => (token ? children : <Redirect to="/" />)} />
  );
};

export default PrivateRoute;