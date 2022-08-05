import Company from "../../company/Company";
import HapplyOpened from "./HapplyOpened";
import "./NewApplicants.scss";

import goodeeLogo from "../../../assets/goodee.png";

const NewApplicants = () => {
  const handleFilter = () => {
    console.log("clicked");
  };

  return (
    <div className="NewApplicants">
      <div className="bookmark"></div>
      <header className="NewApplicants-header">
        <h2>New applicants</h2>
        <h4>143 Venture</h4>
      </header>
      <button onClick={handleFilter} className="filter">
        <div></div>
      </button>
      <HapplyOpened />
      <Company
        logo={goodeeLogo}
        name={"GOODEE"}
        score={9.9}
        website={"goodeeworld.com"}
      />
      <Company
        logo={goodeeLogo}
        name={"Mediocre Comp"}
        score={6.5}
        website={"mediocre.io"}
      />
    </div>
  );
};

export default NewApplicants;
