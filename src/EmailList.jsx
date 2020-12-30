import { Checkbox, IconButton } from "@material-ui/core";
import "./emailList.css";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import GroupIcon from "@material-ui/icons/Group";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Section from "./Section";
import EmailRow from "./EmailRow";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={GroupIcon} title="social" color="blue" />
        <Section Icon={LocalOfferIcon} title="promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow title="Happy Birthday!!!" subject="Hey how are you?" description="test message" time="24 December 2020, 15:45" />
      </div>
    </div>
  );
}

export default EmailList;
