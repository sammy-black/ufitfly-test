import { Link } from "react-router-dom";
import "./NavItem.css"

interface NavItemProps {
  url: string;
  title: string;
}


const NavItem = ({ url, title }: NavItemProps) => {
  return (
    <>
      <Link className="navLink" to={url}>
        <p >{title}</p>
      </Link>
    </>
  );
};

export default NavItem;
