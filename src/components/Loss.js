import './Loss.css';
function Loss() {
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className="font-pos-L">
      <h1 className="font-specs-L">Oh Pitty!!!, You Guessed Wrong!!!</h1>
      <h1 className="font-specs-L">And now your still in prison, so for that we will add 3 more years to your sentence</h1>
      <h1 className="font-specs-L">One year for each Chance you wasted!!!!</h1>
      <h1 className="font-specs-L">Enjoy the rest of your life(Dramatic Pause) in Prison!!!!!!</h1>
      <div className="btn-pos-L">
            <button className="font-ch-L btn-specs-L" onClick={refreshPage}>Click Here to Replay</button>
      </div>
      <div className="img-L">
        <img src="https://i.guim.co.uk/img/media/45ccfb3cae25886286b21a96f53ad2146c287b7c/0_0_8272_4963/master/8272.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=a50197214e91a7627c3385b9c223b347" alt="Guy in Prison" width="600" height="400"></img>
      </div>
    </div>
  );
}

export default Loss;
