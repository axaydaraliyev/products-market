import { RiQuillPenFill } from "react-icons/ri";
import { HStack, VStack, Heading } from "rsuite";
import PropTypes from "prop-types";

const SidebarHeader = ({ expanded }) => {
  if (!expanded) {
    return (
      <HStack justifyContent="center">
        <RiQuillPenFill size={32} />
      </HStack>
    );
  }

  return (
    <VStack p="10px 10px 0 10px" spacing={12}>
      <HStack cursor={"pointer"}>
        <RiQuillPenFill size={32} />
        <Heading level={2}>Imtihon</Heading>
      </HStack>
    </VStack>
  );
};

SidebarHeader.propTypes = {
  expanded: PropTypes.bool.isRequired,
};

export default SidebarHeader;
