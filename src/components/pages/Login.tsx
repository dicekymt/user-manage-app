import { Box, Divider, Flex, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { memo, FC, useState, ChangeEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setUserId] = useState("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  const onClickLogin = () => login(userId);

  return (
    <Flex align={"center"} justify={"center"} direction={"column"} height={"100vh"}>
      <Box bg={"white"} w={"md"} p={6} borderRadius={"md"} shadow={"md"}>
        <Heading as={"h1"} size={"lg"} textAlign={"center"}>
          User Management App
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="user ID"
            value={userId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={userId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            Login
          </PrimaryButton>
        </Stack>
        <Heading as={"h3"} size={"sm"} textAlign={"center"} color={"gray.300"}>This App is built with React + Typescript + ChakraUI</Heading>
      </Box>
      <Text fontSize={"md"} mt={4}>Input "10" in user ID field and you can log in as Admin.
      Edit button show in User Detail modal window.But edit function isn't developed yet.😥</Text>
      <Text fontSize={"md"} mt={4}>Input "1"~"9" in user ID field and you can log in as guest.
      </Text>
    </Flex>
  );
});
