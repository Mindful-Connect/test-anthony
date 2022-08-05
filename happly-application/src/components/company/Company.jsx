import "./Company.scss";

const Company = ({ logo, score, name, website }) => {
  return (
    <div className="Company">
      <main>
        <header>
          <div
            className="image-container"
            style={
              name === "Happly"
                ? {
                    background: "#F3F4F6 0% 0% no-repeat padding-box",
                    marginRight: "12px",
                  }
                : null
            }
          >
            <img className={name} src={logo}></img>
          </div>
          <div>
            <h4>{name}</h4>
            <h5>{website}</h5>
          </div>
        </header>
      </main>
      <div className="company-score-right">
        <h4>Score</h4>
        <div>{score}</div>
      </div>
    </div>
  );
};

export default Company;
