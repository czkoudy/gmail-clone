import "./sidebarOption.css";

function SidebarOption({ Icon, title, number }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
