import {
  Box,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const NavItem = (props) => {
  const { icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      pl="4"
      py="3"
      cursor="pointer"
      color={useColorModeValue("inherit", "gray.400")}
      _hover={{
        bg: useColorModeValue("gray.100", "gray.900"),
        color: useColorModeValue("gray.900", "gray.200"),
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      {...rest}
    >
      {icon && (
        <Icon
          mr="2"
          boxSize="4"
          _groupHover={{
            color: "gray.600",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

const getComponentsFromContent = (content = []) => {
  const result = [];

  for (let item of content) {
    if (item.section) {
      result.push(
        <NavItem>{item.section}</NavItem>
      )
    } else {
      result.push(
        <NavItem to={item.url} icon={item.icon}>{item.content}</NavItem>
      )
    }
  }

  return result;
};

const SidebarContent = (props) => {
  const components = getComponentsFromContent(props.content);

  return (
    <Box
      as="nav"
      top="0"
      left="0"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      w="60"
      {...props}
    >
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {components}
      </Flex>
    </Box>
  );
};

export default function Sidebar({ content }) {
  const sidebar = useDisclosure();
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
      width="250px"
      marginRight="50px"
      display="inline-flex"
    >
      <SidebarContent
        content={content}
        display={{ base: "none", md: "unset" }}
      />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
