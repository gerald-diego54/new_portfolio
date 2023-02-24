import { Box, Center, Container, Grid, Overlay, Text } from "@mantine/core";
import React, { useState } from "react";

const TechStack: React.FC = (): JSX.Element => {
    const [hoverDisplay, setHoverDisplay] = useState<boolean>(false);
    const [hoverDisplay1, setHoverDisplay1] = useState<boolean>(false);
    const [hoverDisplay10, setHoverDisplay10] = useState<boolean>(false);
    const [hoverDisplay11, setHoverDisplay11] = useState<boolean>(false);
    const [hoverDisplay12, setHoverDisplay12] = useState<boolean>(false);
    const [hoverDisplay13, setHoverDisplay13] = useState<boolean>(false);
    const [hoverDisplay14, setHoverDisplay14] = useState<boolean>(false);
    const [hoverDisplay15, setHoverDisplay15] = useState<boolean>(false);
    const [hoverDisplay2, setHoverDisplay2] = useState<boolean>(false);
    const [hoverDisplay3, setHoverDisplay3] = useState<boolean>(false);
    const [hoverDisplay4, setHoverDisplay4] = useState<boolean>(false);
    const [hoverDisplay5, setHoverDisplay5] = useState<boolean>(false);
    const [hoverDisplay6, setHoverDisplay6] = useState<boolean>(false);
    const [hoverDisplay7, setHoverDisplay7] = useState<boolean>(false);
    const [hoverDisplay8, setHoverDisplay8] = useState<boolean>(false);
    const [hoverDisplay9, setHoverDisplay9] = useState<boolean>(false);

    return (
        <Container fluid className="w-full mt-10 lg:max-w-[1536px] px-0">
            <Grid gutter={5} mx={0}>
                <Grid.Col md={3} className="gap-1 flex flex-col">
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay(true)}
                        onMouseLeave={() => setHoverDisplay(false)}
                    >
                        <div className="relative">
                            {hoverDisplay ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/zod.png" className="w-full h-[249px]" alt="" />
                        </div>
                        {hoverDisplay ? (
                            <Center>
                                <Text color="white" size={25} my={15} weight="bold" className="absolute top-0 z-20">
                                    Zod Schema
                                </Text>
                                <Text color="white" className="absolute bottom-10 z-20" align="justify" mx={15}>
                                    Zod is a TypeScript-first schema declaration and validation library. I'm using the
                                    term "schema" to broadly refer to any data type, from a simple string to a complex
                                    nested object.
                                    <br />
                                    <i className="float-right text-white">source: Zod Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay1(true)}
                        onMouseLeave={() => setHoverDisplay1(false)}
                    >
                        <div className="relative">
                            {hoverDisplay1 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/laravel.jpg" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay1 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    Laravel Framework
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Laravel is a web application framework with expressive, elegant syntax. We’ve
                                    already laid the foundation — freeing you to create without sweating the small
                                    things. <br />
                                    <i className="float-right text-white mt-2">source: Laravel Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay2(true)}
                        onMouseLeave={() => setHoverDisplay2(false)}
                    >
                        <div className="relative">
                            {hoverDisplay2 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/prisma.png" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay2 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    Prisma
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Prisma is an open source next-generation ORM. Prisma is a next-generation Node.js
                                    and TypeScript ORM for PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and
                                    CockroachDB. <br />
                                    <i className="float-right text-white mt-2">source: Prisma Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                </Grid.Col>
                <Grid.Col md={3} className="gap-1 flex flex-col">
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay3(true)}
                        onMouseLeave={() => setHoverDisplay3(false)}
                    >
                        <div className="relative">
                            {hoverDisplay3 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/nodejs.jpg" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay3 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    NodeJS
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript
                                    Engine, and executes JavaScript code outside a web browser. <br />
                                    <i className="float-right text-white mt-2">source: Laravel Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay4(true)}
                        onMouseLeave={() => setHoverDisplay4(false)}
                    >
                        <div className="relative">
                            {hoverDisplay4 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/github.png" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay4 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    GitHub
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    GitHub, Inc. is an Internet hosting service for software development and version
                                    control using Git. <br />
                                    <i className="float-right text-white mt-2">source: Laravel Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay5(true)}
                        onMouseLeave={() => setHoverDisplay5(false)}
                    >
                        <div className="relative">
                            {hoverDisplay5 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/mysql.avif" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay5 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    MySQL
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    MySQL is an open-source relational database management system. <br />
                                    <i className="float-right text-white mt-2">source: MySQL Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay6(true)}
                        onMouseLeave={() => setHoverDisplay6(false)}
                    >
                        <div className="relative">
                            {hoverDisplay6 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/trpc.jpg" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay6 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    tRPC
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    tRPC is a light library that lets you build fully typesafe APIs without the need for
                                    schemas or code generation tools
                                    <br />
                                    <i className="float-right text-white mt-2">source: tRPC Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay7(true)}
                        onMouseLeave={() => setHoverDisplay7(false)}
                    >
                        <div className="relative">
                            {hoverDisplay7 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/nextjs.jpeg" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay7 ? (
                            <Center>
                                <Text color="white" size={25} my="auto" weight="bold" className="absolute top-0 z-20">
                                    NextJS
                                </Text>
                                <Text color="white" className="absolute top-14 z-20" align="justify" mx={15}>
                                    Next.js is an open-source web development framework created by Vercel enabling
                                    React-based web applications with server-side rendering and generating static
                                    websites. <br />
                                    <i className="float-right text-white mt-2">source: NextJS Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                </Grid.Col>
                <Grid.Col md={3} className="gap-1 flex flex-col">
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay13(true)}
                        onMouseLeave={() => setHoverDisplay13(false)}
                    >
                        <div className="relative">
                            {hoverDisplay13 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/angular.webp" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay13 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    Angular
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Angular is a TypeScript-based, free and open-source web application framework led by
                                    the Angular Team at Google and by a community of individuals and corporations.{" "}
                                    <br />
                                    <i className="float-right text-white mt-2">source: Angular Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay8(true)}
                        onMouseLeave={() => setHoverDisplay8(false)}
                    >
                        <div className="relative">
                            {hoverDisplay8 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/PHP.png" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay8 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    PHP
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    PHP is a general-purpose scripting language geared toward web development. <br />
                                    <i className="float-right text-white mt-2">source: PHP Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay9(true)}
                        onMouseLeave={() => setHoverDisplay9(false)}
                    >
                        <div className="relative">
                            {hoverDisplay9 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/vercel.png" className="w-full h-[230px]" alt="" />
                        </div>
                        {hoverDisplay9 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    Vercel
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Vercel is a platform for frontend frameworks and static sites, built to integrate
                                    with your headless content, commerce, or database.
                                    <br />
                                    <i className="float-right text-white mt-2">source: Vercel Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay10(true)}
                        onMouseLeave={() => setHoverDisplay10(false)}
                    >
                        <div className="relative">
                            {hoverDisplay10 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/figma.png" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay10 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    Figma
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Figma is a collaborative web application for interface design, with additional
                                    offline features enabled by desktop applications for macOS and Windows. <br />
                                    <i className="float-right text-white mt-2">source: Figma Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                </Grid.Col>
                <Grid.Col md={3} className="gap-1 flex flex-col">
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay11(true)}
                        onMouseLeave={() => setHoverDisplay11(false)}
                    >
                        <div className="relative">
                            {hoverDisplay11 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/tailwind.png" className="w-full h-[333px]" alt="" />
                        </div>
                        {hoverDisplay11 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    Tailwind CSS
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Tailwind CSS is an open source CSS framework. The main feature of this library is
                                    that, unlike other CSS frameworks like Bootstrap, it does not provide a series of
                                    predefined classes for elements such as buttons or tables. <br />
                                    <i className="float-right text-white mt-2">source: Tailwind CSS Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay12(true)}
                        onMouseLeave={() => setHoverDisplay12(false)}
                    >
                        <div className="relative">
                            {hoverDisplay12 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/mongo.gif" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay12 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    MongoDB
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    MongoDB is a source-available cross-platform document-oriented database program.
                                    Classified as a NoSQL database program, MongoDB uses JSON-like documents with
                                    optional schemas. <br />
                                    <i className="float-right text-white mt-2">source: MongoB Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay14(true)}
                        onMouseLeave={() => setHoverDisplay14(false)}
                    >
                        <div className="relative">
                            {hoverDisplay14 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/bootstrap5.webp" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay14 ? (
                            <Center>
                                <Text color="white" size={25} my={20} weight="bold" className="absolute top-0 z-20">
                                    Bootstrap
                                </Text>
                                <Text color="white" className="absolute top-24 z-20" align="justify" mx={15}>
                                    Bootstrap is the most popular CSS Framework for developing responsive and
                                    mobile-first websites. <br />
                                    <i className="float-right text-white mt-2">source: Bootstrap Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                    <Box
                        className="relative z-0"
                        onMouseEnter={() => setHoverDisplay15(true)}
                        onMouseLeave={() => setHoverDisplay15(false)}
                    >
                        <div className="relative">
                            {hoverDisplay15 ? (
                                <Overlay
                                    opacity={0.3}
                                    color="#000"
                                    blur={1}
                                    zIndex={10}
                                    className="absolute bottom-0"
                                />
                            ) : null}
                            <img src="/images/react.png" className="w-full h-[100%]" alt="" />
                        </div>
                        {hoverDisplay15 ? (
                            <Center>
                                <Text color="white" size={25} weight="bold" className="absolute top-0 z-20">
                                    ReactJS
                                </Text>
                                <Text color="white" className="absolute top-10 z-20" align="justify" mx={15}>
                                    React is a free and open-source front-end JavaScript library for building user
                                    interfaces based on components. <br />
                                    <i className="float-right text-white mt-2">source: ReactJS Documentation</i>
                                </Text>
                            </Center>
                        ) : null}
                    </Box>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default TechStack;
