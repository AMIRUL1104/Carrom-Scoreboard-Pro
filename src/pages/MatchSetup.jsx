import { useParams } from "react-router-dom";
function MatchSetup() {
  const { id } = useParams();
  console.log(id);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      {" "}
      <h1>Product ID: {id}</h1>{" "}
      <p>Tumi ekhon product number {id} er detail dekhcho.</p>{" "}
      {/* Logic: 'id' er upor base kore tumi backend theke specific data fetch korte parbe. */}{" "}
      {/* <button onClick={() => navigate("/products")}>
        Go Back to Products
      </button>{" "} */}
    </div>
  );
}

export default MatchSetup;
