import "./FirstMeeting.scss";
import { Draggable, Droppable } from "react-beautiful-dnd";
import goodeeLogo from "../../../assets/goodee.png";
import piedpiperLogo from "../../../assets/piedpiper.png";
import Company from "../../company/Company";

const FirstMeeting = ({ firstMeetingCompanies }) => {
  return (
    <div className="FirstMeeting">
      <div className="bookmark"></div>
      <header className="FirstMeeting-header">
        <h2>1st Meeting</h2>
        <h4>2 Ventures</h4>
      </header>

      <Droppable droppableId="firstMeetingCompanies">
        {(provided) => (
          <ul
            className="firstMeetingCompanies"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {firstMeetingCompanies.length ? (
              firstMeetingCompanies.map(
                ({ id, logo, name, score, website }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Company
                            logo={logo}
                            name={name}
                            score={score}
                            website={website}
                          />
                        </li>
                      )}
                    </Draggable>
                  );
                }
              )
            ) : (
              <div className="drag-area">
                <p>Drag applicant card here</p>
              </div>
            )}

            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default FirstMeeting;
