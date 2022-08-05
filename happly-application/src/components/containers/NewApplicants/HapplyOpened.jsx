import happlyLogo from "../../../assets/Group 6113.png";
import suitcase from "../../../assets/suitcase.png";
import dollar from "../../../assets/dollar.png";
import "./HapplyOpened.scss";
import { useState } from "react";
import Company from "../../company/Company";

const HapplyOpened = () => {
  const [opened, setOpened] = useState(true);

  const handleOpen = () => {
    setOpened((prev) => !prev);
  };

  return (
    <>
      {opened ? (
        <div className="HapplyOpened" onClick={handleOpen}>
          <main>
            <header>
              <div className="happly-image-container">
                <img src={happlyLogo}></img>
              </div>
              <div>
                <h4>Happly</h4>
                <h5>happly.ai</h5>
              </div>
            </header>
            <div className="main-1">
              <div>
                <div className="owner">Owner</div>
                <div className="thierry">
                  Thierry L.<span className="plus-2">+2</span>
                </div>
              </div>
              <div className="main-1-2">
                <div className="location">Location</div>
                <div className="montreal">Montreal, Qc</div>
              </div>
            </div>
            <div className="main-2">
              <div>
                <div className="stage">Stage</div>
                <div className="seed">Seed</div>
              </div>
              <div>
                <div className="amount">Amount</div>
                <div className="money">$2,500,000</div>
              </div>
            </div>

            <div className="main-3">
              <div style={{ display: "flex" }}>
                <img src={suitcase} className="suitcase" />
                <div className="employees">0 - 10 Employees</div>
              </div>
              <div style={{ display: "flex" }}>
                <img src={dollar} className="dollar" />
                <div className="annual-revenue">750k Annual Revenue</div>
              </div>
            </div>
          </main>

          <div className="happly-score">
            <div className="happly-score-left">
              <div className="happly-score-header-container">
                <div className="good">Good</div>
                <div className="bkr-score">BKR Score</div>
              </div>
              <div className="dot-container">
                <div className="dot-1"></div>
                <div className="dot-2"></div>
                <div className="dot-3"></div>
                <div className="dot-4"></div>
                <div className="dot-5"></div>
              </div>
            </div>
            <div className="happly-score-right">
              <div>9.5</div>
            </div>
          </div>
        </div>
      ) : (
        <div onClick={handleOpen} className="happly-closed">
          <Company
            logo={happlyLogo}
            score={9.5}
            name={"Happly"}
            website={"happly.ai"}
          />
        </div>
      )}
    </>
  );
};

export default HapplyOpened;
