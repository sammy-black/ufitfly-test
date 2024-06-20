import { Stack } from "react-bootstrap";
import NavItem from "./navItem";
import PrimaryButton from "../UI/PrimaryButton";
import Logo from "../Logo";
import { SearchIcon } from "../../assets/images";

const menuItems = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Tags",
    url: "/tags",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Blog",
    url: "/blog",
  },
];

const Navbar = () => {
  return (
    <Stack
      direction="horizontal"
      className="align-items-center justify-content-between"
    >
      <Stack direction="horizontal" gap={3} className="align-items-center">
        <Logo />
        {menuItems.map((item) => (
          <NavItem key={item.id} {...item} />
        ))}
      </Stack>

      <Stack direction="horizontal" gap={3}>
        <div style={{ height: "30px", width: "30px" }}>
          <img src={SearchIcon.default} />
        </div>

        <PrimaryButton title="Login" onClick={() => {}} />
      </Stack>
    </Stack>
  );
};

export default Navbar;
