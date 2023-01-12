import css from "./EventBoard.module.css";

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map((event) => {
        return <div key={event.name}>{event.name}</div>;
      })}
    </div>
  );
};
