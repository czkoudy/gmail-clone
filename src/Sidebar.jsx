import { Button } from "@material-ui/core";
import "./sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
        Compose
      </Button>
      <SidebarOption Icon={InboxIcon} title="Inbox" number={20} />
    </div>
  );
}

export default Sidebar;