import PropTypes from "prop-types";

import css from "./EventBoard.module.css";
import { Event } from "componets/Event/Event";

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, location, speaker, type, time }) => {
        return (
          <div>
            <Event
              key={name}
              name={name}
              location={location}
              speaker={speaker}
              type={type}
              start={time.start}
              end={time.end}
            />
          </div>
        );
      })}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: {
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      },
    })
  ),
};
