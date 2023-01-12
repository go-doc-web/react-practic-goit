import css from "./EventBoard.module.css";
import { Event } from "componets/Event/Event";

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map((event) => {
        return (
          <div>
            <Event key={event.name} />
          </div>
        );
      })}
    </div>
  );
};
