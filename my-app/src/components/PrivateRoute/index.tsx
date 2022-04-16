import {Route, Redirect, RouteProps } from 'react-router-dom';
import {useSelector} from "react-redux";
import { ReactNode, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setUser, deleteUser } from '../../redux/actions/user';
import { API_BASE_URL } from '../../constants/spotify';
import React from "react";
import axios from "axios";
import { Alert } from "@mui/material";


interface IPrivateRouteProps extends RouteProps {
    children: ReactNode;
}
const PrivateRoute = ({children, ...props}: IPrivateRouteProps) => {
    const token = useAppSelector((state) => state.user.token);
    const dispatch = useAppDispatch();
    return (
        <Route
            {...props} render={() => 
                (token ? children : <Redirect to="/"/>)}/>
    );
};

export default PrivateRoute;