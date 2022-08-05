import "./App.css";
import NewApplicants from "./components/containers/NewApplicants/NewApplicants";
import FirstMeeting from "./components/containers/FirstMeeting/FirstMeeting";
import ReviewingAndDueDiligence from "./components/containers/ReviewingAndDueDiligence/ReviewingAndDueDiligence";
import { DragDropContext } from "react-beautiful-dnd";
import { useEffect, useState } from "react";

import goodeeLogo from "./assets/goodee.png";
import piedpiperLogo from "./assets/piedpiper.png";

function App() {
  const companiesArray = [
    {
      id: "goodee",
      logo: goodeeLogo,
      name: "GOODEE",
      score: 9.9,
      website: "goodeeworld.com",
    },
    {
      id: "piedpiper",
      logo: piedpiperLogo,
      name: "Pied Piper",
      score: 10,
      website: "piedpiper.com",
    },
  ];

  const [firstMeetingCompanies, setFirstMeetingCompanies] = useState([]);
  const [reviewCompanies, setReviewCompanies] = useState(companiesArray);

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add;
    let first = firstMeetingCompanies;
    let review = reviewCompanies;

    // Source Logic
    if (source.droppableId === "firstMeetingCompanies") {
      add = first[source.index];
      first.splice(source.index, 1);
    } else {
      add = review[source.index];
      review.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "firstMeetingCompanies") {
      first.splice(destination.index, 0, add);
    } else {
      review.splice(destination.index, 0, add);
    }

    setFirstMeetingCompanies(first);
    setReviewCompanies(review);
  };

  return (
    <div className="App">
      <NewApplicants />
      <DragDropContext onDragEnd={handleDragEnd}>
        <FirstMeeting firstMeetingCompanies={firstMeetingCompanies} />
        <ReviewingAndDueDiligence reviewCompanies={reviewCompanies} />
      </DragDropContext>
    </div>
  );
}

export default App;
