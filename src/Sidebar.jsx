import { Button, IconButton } from "@material-ui/core";
import "./sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SendIcon from "@material-ui/icons/Send";
import ReportIcon from "@material-ui/icons/Report";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NoteIcon from "@material-ui/icons/Note";

import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={20} selected={true} />
      <SidebarOption Icon={QueryBuilderIcon} title="Snoozed" number={5} />
      <SidebarOption Icon={SendIcon} title="Sent" number={5} />
      <SidebarOption Icon={ReportIcon} title="Spam" number={5} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={5} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={5} />

      <div className="sidebar__footer">
        <div className="sidebar__fotterIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
