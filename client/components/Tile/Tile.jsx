import "./tile.css";
const Tile = (props) => {
  return (
    <div className="tile" style={{ backgroundColor: props.color }}>
      {props.title}
    </div>
  );
};

export default Tile;
