import { Button, Center, Container, Flex, Text, TextInput } from "@mantine/core";
import React from "react";

const Footer: React.FC = (): JSX.Element => {
    return (
        <Container py={50}>
            <Text
                transform="capitalize"
                color="white"
                size={50}
                weight="normal"
                align="center"
                className="font-play-fair"
            >
                subscribe form
            </Text>
            <Center>
                <Flex direction="row">
                    <TextInput
                        label="Your email"
                        placeholder="Your email"
                        classNames={{ input: "h-16 rounded-none md:w-[500px] bg-black text-white", root: "py-0" }}
                    />
                    <Button className="h-16 mt-[25.5px] rounded-none bg-white text-black hover:bg-slate-200">
                        Join
                    </Button>
                </Flex>
            </Center>
            <Text
                transform="capitalize"
                color="white"
                size={17}
                weight="lighter"
                align="center"
                my={30}
                className="tracking-widest font-serif"
            >
                thank, for subscribing!
            </Text>
            <Text
                transform="capitalize"
                color="white"
                size={30}
                mt={70}
                weight="normal"
                align="center"
                className="font-play-fair"
            >
                Gerald Diego
            </Text>
            <Text color="white" size={17} weight="lighter" align="center" className="tracking-widest">
                geralddiego42@gmail.com
            </Text>
            <Text color="white" size={17} mt={100} weight="lighter" align="center" className="tracking-widest">
                ©2023 by gerald diego. Proudly created in React Typescript.
            </Text>
        </Container>
    );
};

export default Footer;
