import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import upEvents from "./upcoming-events.json";

export const App = () => {
  return (
    <>
      <PageTitle title="24th Core Worlds Coalition Conference" />;
      <EventBoard events={upEvents} />
    </>
  );
};

// location
// :
// "Corvus, Jangala"
// name
// :
// "Protecting the outer rim"
// speaker
// :
// "Jacob Mercer"

// time
// :
// {end: "2022-02-17T16:30:00", start: "2022-02-17T14:…}
// end
// :
// "2022-02-17T16:30:00"
// start
// :
// "2022-02-17T14:30:00"
// new entry
// :
// ""
// type
// :
// "free"
// new entry
// :
