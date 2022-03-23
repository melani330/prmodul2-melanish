export default function Info(props) {
    return (
      <div>
        <h2>Track Info</h2>
        <div className="container">
          <img src={props.image} alt="img" />
          <h4>{props.albumName}</h4>
          <p>{props.titleSong}</p>
          <button>Select</button>
        </div>
      </div>
    );
  }
  