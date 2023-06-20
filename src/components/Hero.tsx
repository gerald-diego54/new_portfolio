import { Container, Grid, Text } from "@mantine/core";
import { Image, Center } from "@mantine/core";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero: React.FC = (): JSX.Element => {
    return (
        <Container fluid className="md:max-w-[1536px] px-0">
            <Grid mx={0}>
                <Grid.Col md={6} px={0}>
                    <Image
                        className="hidden md:contents"
                        src="/images/gerald.jpeg"
                        height={650}
                        mx={0}
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col md={6} className="relative md:pt-40">
                    <Container className="w-fit py-32 md:px-24 md:py-7 h-fit">
                        <Center>
                            <Typewriter
                                options={{
                                    loop: false,
                                    wrapperClassName:
                                        "text-white text-2xl md:text-5xl font-play-fair text-justify leading-relaxed",
                                    devMode: true,
                                    cursorClassName: "text-white font-normal",
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Introducing Gerald — Software Developer")
                                        .callFunction(() => {
                                            console.log("String already typed!");
                                        })
                                        .pauseFor(2500)
                                        .start();
                                }}
                            />
                        </Center>
                        <Text color="white" className="w-fit" mt={30} align="justify">
                            Gerald Diego is a Senior High School graduate in Our Lady of Fatima University ( 2019 ) and
                            graduate of Philippine Bootcamp in year of ( 2022 ) which is
                            <i className="font-bold"> KodeGo Bootcamp</i> owned by 917Ventures a venture builder of
                            Globe Corporation. He has a year experience in Software Development.
                        </Text>
                    </Container>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Hero;
