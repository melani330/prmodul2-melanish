import React, { Component } from "react";
// import "./index.css";
import Info from "./info";
import data from "./data";

class AlbumData extends Component {
  render() {
    return (
      <div>
        <Info
          image={data.album_url}
          albumName={data.album_title}
          titleSong={data.title}
        />
      </div>
    );
  }
}
export default AlbumData;
