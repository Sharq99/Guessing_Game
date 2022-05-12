import './Win.css';
function Win() {
    function refreshPage() {
        window.location.reload(false);
      }

    return (
      <div className="font-pos-W">
        <h1 className="font-specs-W">Congrats!!!!!!</h1>
        <h1 className="font-specs-W">You have guessed the correct Number and Earned your Freedom</h1>
        <h1 className="font-specs-W">Now go enjoy Your New Life</h1>
        <div className="btn-pos-W">
            <button className="font-ch-W btn-specs-W" onClick={refreshPage}>Click Here to Replay</button>
        </div>
        <div className="img-W">
        <img src="https://media.istockphoto.com/photos/silhouette-image-of-a-businessman-with-broken-chains-in-sunset-picture-id681640288?k=20&m=681640288&s=612x612&w=0&h=Qebi0iOEPyKl9ZBhverRMuP1tva7Knd8QEd3oeKRlyY=" alt="Freedome" width="600" height="400"></img>
        </div>
      </div>
    );
  }
  
  export default Win;