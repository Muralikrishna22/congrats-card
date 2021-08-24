const element = (
  <div className="bg-container">
    <div>
      <h1 className="greet">Congratulations</h1>
    </div>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="profile-discription">
        Vishnu Institute of Computer Education and Technology Bimavaram.
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="gadget"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
