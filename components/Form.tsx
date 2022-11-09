import React from "react";
import {
  TextInput,
  Button,
  Flex,
  Avatar,
  Text,
  Container,
} from "@mantine/core";
import { IconAt, IconAlarm, IconStar } from "@tabler/icons";

function Form() {
  return (
    <>
      <h2 style={{ color: "black" }}>Signup To Anmut</h2>
      <form>
        <TextInput
          placeholder="email"
          icon={<IconAt size={14} />}
          size="xl"
          mb={15}
          w={400}
        />
        <TextInput
          placeholder="company name"
          icon={<IconAlarm size={14} />}
          size="xl"
          mb={15}
        />

        <Button size="xl" w={400} bg="#A88DCC">
          Signup
        </Button>
      </form>
    </>
  );
}

export default Form;
