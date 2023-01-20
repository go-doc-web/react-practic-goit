import { format } from "date-fns";

const formatEventStart = (start) => {
  return format(new Date(start), "dd MMMM yyyy,HH:mm");
};

export default formatEventStart;
