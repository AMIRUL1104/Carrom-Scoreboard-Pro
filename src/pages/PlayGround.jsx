import { useParams } from "react-router-dom";

function PlayGround() {
  const { id } = useParams();

  return <div>PlayGround {id} </div>;
}

export default PlayGround;
