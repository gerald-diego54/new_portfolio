import { Container, Grid, Image, Stack, Overlay, Box, Text, Button, Flex } from "@mantine/core";
import React, { useState } from "react";
import { Parallax } from "react-parallax";

const About: React.FC = (): JSX.Element => {
    const [overlay, setOverlay] = useState<boolean>(false);
    const [overlay1, setOverlay1] = useState<boolean>(false);
    const [overlay2, setOverlay2] = useState<boolean>(false);
    const [overlay3, setOverlay3] = useState<boolean>(false);

    return (
        <Container fluid className="w-full relative lg:max-h-[820px] mt-10 px-0 z-0">
            <Parallax
                bgImage="/images/wallpaper2.jfif"
                bgImageAlt="the cat"
                strength={300}
                className="lg:max-h-[820px]"
            >
                <Overlay
                    opacity={0.6}
                    color="#000"
                    blur={1}
                    zIndex={10}
                    className="w-full h-full absolute bottom-0 lg:max-h-[820px]"
                />
                <Stack justify="center" align="center" className="z-20">
                    <Container fluid className="max-w-[1536px] lg:h-screen">
                        <Text
                            align="center"
                            color="white"
                            size={50}
                            weight="bold"
                            transform="uppercase"
                            className="relative pt-[8%] font-play-fair z-20"
                        >
                            Portfolio Projects
                        </Text>
                        <Container fluid my={30} className="z-0">
                            <Grid grow gutter={50}>
                                <Grid.Col md={3}>
                                    <Box
                                        className="relative z-10"
                                        onMouseEnter={() => setOverlay(true)}
                                        onMouseLeave={() => setOverlay(false)}
                                    >
                                        <div className="relative">
                                            <Image src="/images/cloutchain.jpg" height={330} alt="" />
                                            {overlay ? (
                                                <Overlay
                                                    opacity={0.3}
                                                    color="#000"
                                                    blur={1}
                                                    h="89%"
                                                    zIndex={20}
                                                    className="absolute top-10"
                                                />
                                            ) : null}
                                            {overlay && (
                                                <Container fluid className="absolute top-24 z-20" mx={70}>
                                                    <Flex direction="column">
                                                        <Text size={30} weight="bold" color="white">
                                                            Cloutchain
                                                        </Text>
                                                        <Button className="bg-sky-600" my={30}>
                                                            Link
                                                        </Button>
                                                    </Flex>
                                                </Container>
                                            )}
                                        </div>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col md={3} className="z-20">
                                    <Box
                                        className="relative z-10"
                                        onMouseEnter={() => setOverlay1(true)}
                                        onMouseLeave={() => setOverlay1(false)}
                                    >
                                        <div className="relative">
                                            <Image src="/images/hypersona.svg" height={330} alt="" />
                                            {overlay1 ? (
                                                <Overlay
                                                    opacity={0.3}
                                                    color="#000"
                                                    blur={1}
                                                    h="89%"
                                                    zIndex={20}
                                                    className="absolute top-10"
                                                />
                                            ) : null}
                                            {overlay1 && (
                                                <Container fluid className="absolute top-24 z-20" mx={70}>
                                                    <Flex direction="column">
                                                        <Text size={30} weight="bold" color="white">
                                                            Hypersona
                                                        </Text>
                                                        <Button className="bg-sky-600" my={30}>
                                                            Link
                                                        </Button>
                                                    </Flex>
                                                </Container>
                                            )}
                                        </div>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col md={3} className="z-20">
                                    <Box
                                        className="relative z-10"
                                        onMouseEnter={() => setOverlay2(true)}
                                        onMouseLeave={() => setOverlay2(false)}
                                    >
                                        <div className="relative">
                                            <Image src="/images/finance.png" height={330} alt="" />
                                            {overlay2 ? (
                                                <Overlay
                                                    opacity={0.3}
                                                    color="#000"
                                                    blur={1}
                                                    h="89%"
                                                    zIndex={20}
                                                    className="absolute top-10"
                                                />
                                            ) : null}
                                            {overlay2 && (
                                                <Container fluid className="absolute top-24 z-20" mx={30}>
                                                    <Flex direction="column">
                                                        <Text size={30} weight="bold" color="white">
                                                            Finance Chrome
                                                        </Text>
                                                        <Button className="bg-sky-600" my={30}>
                                                            Link
                                                        </Button>
                                                    </Flex>
                                                </Container>
                                            )}
                                        </div>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col md={3} className="z-20">
                                    <Box
                                        className="relative z-10"
                                        onMouseEnter={() => setOverlay3(true)}
                                        onMouseLeave={() => setOverlay3(false)}
                                    >
                                        <div className="relative">
                                            <Image src="/images/ichtus.jpg" height={330} fit="fill" alt="" />
                                            {overlay3 ? (
                                                <Overlay
                                                    opacity={0.3}
                                                    color="#000"
                                                    blur={1}
                                                    h="89%"
                                                    zIndex={20}
                                                    className="absolute top-10"
                                                />
                                            ) : null}
                                            {overlay3 && (
                                                <Container fluid className="absolute top-24 z-20" mx={100}>
                                                    <Flex direction="column">
                                                        <Text size={30} weight="bold" color="white">
                                                            Ichtus
                                                        </Text>
                                                        <Button className="bg-sky-600" my={30}>
                                                            Link
                                                        </Button>
                                                    </Flex>
                                                </Container>
                                            )}
                                        </div>
                                    </Box>
                                </Grid.Col>
                            </Grid>
                        </Container>
                    </Container>
                </Stack>
            </Parallax>
        </Container>
    );
};

export default About;
