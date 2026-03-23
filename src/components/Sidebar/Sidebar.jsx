import {
  MdOutlineAssignment,
  MdOutlineShoppingCart,
  MdAddShoppingCart,
  MdBuild,
} from "react-icons/md";

import { Sidenav, Nav, Box } from "rsuite";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  return (
    <Box w={expanded ? 240 : "auto"}>
      <Sidenav h={"100vh"} expanded={expanded}>
        <Sidenav.Header>
          <SidebarHeader expanded={expanded} />
        </Sidenav.Header>
        <Sidenav.Body>
          <Nav>
            <Nav.Item as={Link} to={"/"} icon={<MdOutlineAssignment />}>
              Olingan maxsulotlar
            </Nav.Item>
            <Nav.Item
              as={Link}
              to={"/yeguliklar"}
              icon={<MdOutlineShoppingCart />}>
              Yeguliklar
            </Nav.Item>
            <Nav.Item as={Link} to={"/anjomlar"} icon={<MdBuild />}>
              Anjomlar
            </Nav.Item>
            <Nav.Item
              as={Link}
              to={"/create-products"}
              icon={<MdAddShoppingCart />}>
              Mahsulot qo&apos;shish
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Footer>
          <Sidenav.Toggle onToggle={setExpanded} />
        </Sidenav.Footer>
      </Sidenav>
    </Box>
  );
}

export default Sidebar;
