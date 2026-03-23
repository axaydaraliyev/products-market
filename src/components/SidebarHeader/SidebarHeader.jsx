import { MdShoppingCart } from "react-icons/md";
import { HStack, VStack, Heading } from "rsuite";
import PropTypes from "prop-types";

const SidebarHeader = ({ expanded }) => {
  if (!expanded) {
    return (
      <HStack justifyContent="center">
        <MdShoppingCart size={32} />
      </HStack>
    );
  }

  return (
    <VStack p="10px 10px 0 10px" spacing={12}>
      <HStack cursor={"pointer"}>
        <MdShoppingCart size={32} />
        <Heading level={2}>Online Shop</Heading>
      </HStack>
    </VStack>
  );
};

SidebarHeader.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default SidebarHeader;
