import Company from "../../company/Company";
import "./ReviewingAndDueDiligence.scss";
import { Draggable, Droppable } from "react-beautiful-dnd";

const ReviewingAndDueDiligence = ({ reviewCompanies }) => {
  return (
    <div className="ReviewingAndDueDiligence">
      <div className="bookmark"></div>
      <header className="ReviewingAndDueDiligence-header">
        <h2>Reviewing & Due Diligence</h2>
        <h4>1 Venture</h4>
      </header>

      <Droppable droppableId="reviewCompanies">
        {(provided) => (
          <ul
            className="reviewCompanies"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {reviewCompanies.length ? (
              reviewCompanies.map(
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

export default ReviewingAndDueDiligence;
