import css from "./Event.module.css";
import PropTypes from "prop-types";

export const Event = ({ name, location, speaker, type, start, end }) => {
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <i className={css.icon}></i>
        {location}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        {speaker}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        {start}
      </p>
      <p className={css.info}>
        <i className={css.icon}></i>
        {end}
      </p>
      {/* <span className={css.chip} free|paid|vip">Event type</span> */}
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
