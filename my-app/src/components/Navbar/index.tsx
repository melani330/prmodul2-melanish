import "./style.css";
import React from 'react';
import { Avatar, Image } from 'antd';
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <p className="logoApp">Music Playlist</p>
            </div>
            <div className="navbar-right">
                <a><Avatar src={
                    <Image
                        src="https://joeschmoe.io/api/v1/random"
                        style={{
                            width: 32,
                        }}
                    />
                }/></a>
                <a className="logoutApp" href="/">Logout</a> 
            </div>
        </div>
    );
};

export default Navbar;