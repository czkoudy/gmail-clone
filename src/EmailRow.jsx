import { Checkbox, IconButton } from "@material-ui/core";
import "./emailRow.css";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <div className="emailRow__title"></div>
      <div className="emailRow__message"></div>
      <div className="emailRow__description"></div>
    </div>
  );
}

export default EmailRow;
