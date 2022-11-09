import { Button, Container, Flex, Avatar, Text, BackgroundImage } from "@mantine/core";
import { IconStar } from "@tabler/icons";
import Form from "../components/Form";

const content = [
  {
    icon: "https://avatars.githubusercontent.com/u/22632046?s=280&v=4",
    text: "Write text here..",
  },
  {
    icon: "https://avatars.githubusercontent.com/u/22632046?s=280&v=4",
    text: "Write text here..",
  },
  {
    icon: "https://avatars.githubusercontent.com/u/22632046?s=280&v=4",
    text: "Write text here..",
  },
];

interface Props {
  icon?: string;
  text?: "Value our data" | "Run our diagnostic";
  companyPartnership?: string;
  inputFields?: [{ type: string; input: string }];
  number?: number;
  meshColors?: string;
  toggle?: boolean;
}

export default function Home({ icon, text, companyPartnership, inputFields, number, meshColors, toggle }: Props) {
  return (
    <Flex c="white" fz={25}>
      {/* left side */}
      <Flex direction="column" justify="center" align="center" gap={20} w={"50%"} h={"100vh"} bg="black" sx={{ position: "relative", "@media (max-width: 992px)": { display: "none" } }}>
        <BackgroundImage
          h={"100vh"}
          sx={{ objectFit: "cover", position: "absolute", opacity: "40%" }}
          src="https://img.dpr.com/content/uploads/project-hero/wework-1372-peachtree-main-lobby-with-reception.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5328&fp-y=0.6187&h=1060&q=80&w=1500&s=06eaf3abc781dbebae29d8b5e9460272"
        />
        {content.map((item, i) => (
          <Flex key={i} align="center" gap={20}>
            <Avatar radius="sm" sx={{ border: "1px white solid", borderRadius: "100%" }}>
              <IconStar size={24} />
            </Avatar>
            <Text>Value your data</Text>
          </Flex>
        ))}

        <Flex direction="column" gap={15} bottom={200} sx={{ position: "absolute" }}>
          <Text fz="md" align="center">
            Value Our Data
          </Text>
          <p className="font-bold bg-red-500 text-red-400">JAKE</p>

          <Flex gap={50}>
            {content.map((item, i) => (
              <Avatar key={i} src={item.icon} />
            ))}
          </Flex>
        </Flex>
      </Flex>

      {/* right side */}
      <Flex direction="column" justify="center" align="center" gap={20} w={{ base: "100%", md: "50%" }} h={"100vh"} sx={{ position: "relative" }}>
        <Text c="black" top={50} left={50} weight="600" sx={{ position: "absolute" }}>
          Anmut
        </Text>
        <Form />
        <div className="justify-between px-8 pb-6 hidden md:flex text-red-500">
          <p>Privacy Policy</p>
          <p>Copyright 2022</p>
        </div>
      </Flex>
    </Flex>
  );
}
