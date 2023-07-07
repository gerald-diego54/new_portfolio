import { Anchor, Button, Container, Flex, Drawer, Center, Text } from "@mantine/core";
import { IconEyeglass2, IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState } from "react";

const Navbar: React.FC = (): JSX.Element => {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <Container fluid className="bg-black py-3 mx-0 flex justify-between">
            <Anchor href="#" className="text-white py-4 text-4xl font-semibold">
                Gerald Diego
            </Anchor>
            <Flex className="py-4 hidden md:flex" justify="flex-end" align="center" direction="row" gap="md">
                <Anchor href="/resume-update.pdf" download className="text-white text-xl cursor-pointer">
                    Download CV
                </Anchor>
                <Anchor href="mailto:geralddiego42@gmail.com" className="text-white text-xl cursor-pointer">
                    Inquire
                </Anchor>
            </Flex>
            <Button className="my-4 active:bg-transparent md:hidden" onClick={() => setOpened(true)}>
                <IconMenu2 className="text-white" />
            </Button>
            <Drawer
                className="md:hidden bg-amber-50"
                opened={opened}
                position="right"
                onClose={() => null}
                padding="xl"
                withCloseButton={false}
                size="full"
            >
                <Container fluid>
                    <Button
                        className="my-4 active:bg-transparent md:hidden w-full flex flex-row-reverse"
                        onClick={() => setOpened(false)}
                    >
                        <IconX className="text-black" />
                    </Button>
                    <Center>
                        <Flex direction="column">
                            <Center>
                                <IconEyeglass2 color="black" size={30} width={100} />
                            </Center>
                            <Text
                                transform="capitalize"
                                color="black"
                                size={30}
                                weight="normal"
                                align="center"
                                className="font-play-fair"
                            >
                                Gerald Diego
                            </Text>
                            <Text
                                transform="capitalize"
                                color="black"
                                size={16}
                                weight="normal"
                                align="center"
                                className="font-play-fair"
                            >
                                Software Developer
                            </Text>
                            <Center my={30} className="flex flex-col">
                                <Anchor href="#" target="_blank" className="text-black underline">
                                    Home
                                </Anchor>
                                <Anchor href="#" target="_blank" className="text-black underline">
                                    CV
                                </Anchor>
                                <Text my={25}>geralddiego42@gmail.com</Text>
                            </Center>
                        </Flex>
                    </Center>
                </Container>
            </Drawer>
        </Container>
    );
};

export default Navbar;
