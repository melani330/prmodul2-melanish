import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {setToken} from "../../redux/actions/user";
import {Redirect} from "react-router-dom";
import queryString from "query-string";
import React from "react";
import "./style.css";
import songs from "../../asset/img/song.png"
import {AUTH_BASE_URL, 
        RESPONSE_TYPE, 
        CLIENT_ID, SCOPE, 
        REDIRECT_URI}
        from "../../constants/spotify";

const Page = () => {
    const token = useSelector((state) => state.user.token);
    const dispatch = useDispatch();
    const SPOTIFY_AUTH_URL = `${AUTH_BASE_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`;

    useEffect(() => {
        if (window.location.hash) {
            const params = queryString.parse(window.location.hash);
            window.location.hash = "";
            dispatch(setToken(params.access_token));
        }
    }, [dispatch]);

    return (
        <div className="page-container">
            {token
                ? (<Redirect to="/create-playlist"/>)
                : (
                    <div className="home-container">
                        <h1>Create your own music playlist!</h1>
                        <img src={songs} className="music-logo" alt="songs"/><br/>
                        <a className="login-button" href={SPOTIFY_AUTH_URL}>
                            Login
                        </a>
                    </div>
                )}
        </div>
    );
};
export default Page;