import { Container, Grid, TextInput, Textarea, Text, Button } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import React from "react";
import { ContactSchema, IContactSchema } from "../schema/ConacttSchema";
import axios from "axios";
import _ from "lodash";

const Contact: React.FC = (): JSX.Element => {
    const headers = {
        "Content-Type": "application/json",
    };
    const { getInputProps, onSubmit } = useForm<IContactSchema>({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            address: "",
            subject: "",
            message: "",
        },
        validateInputOnChange: true,
        validate: zodResolver(ContactSchema),
    });

    const submit = onSubmit(async (value) => {
        if (!_.isNull(value)) {
            await axios.post("http://localhost:4000/api/v1/contact", value, {});
        }
    });

    return (
        <Container fluid className="max-w-[1536px] lg:max-h-[820px]">
            <Grid className="w-full py-40">
                <Grid.Col md={6}>
                    <Text
                        transform="capitalize"
                        color="white"
                        size={50}
                        weight="semibold"
                        align="center"
                        className="font-play-fair"
                    >
                        get in touch
                    </Text>
                    <Text
                        transform="capitalize"
                        color="white"
                        size={17}
                        weight="lighter"
                        align="center"
                        my={30}
                        className="tracking-widest"
                    >
                        valenzuela city, metro manila, NCR
                    </Text>
                    <Text color="white" size={17} weight="lighter" my={30} align="center" className="tracking-widest">
                        geralddiego42@gmail.com
                    </Text>
                </Grid.Col>
                <Grid.Col md={6} px={50}>
                    <form onSubmit={submit}>
                        <Grid gutter={10}>
                            <Grid.Col md={6}>
                                <TextInput
                                    classNames={{
                                        input: "bg-black border-x-0 border-t-0 border-b-1 text-white my-3",
                                        label: "text-white font-play-fair",
                                        required: "text-white",
                                    }}
                                    placeholder="Enter your name"
                                    label="Name"
                                    withAsterisk
                                    {...getInputProps("name")}
                                />
                                <TextInput
                                    classNames={{
                                        input: "bg-black border-x-0 border-t-0 border-b-1 text-white my-3",
                                        label: "text-white font-play-fair",
                                        required: "text-white",
                                    }}
                                    placeholder="Enter your phone number"
                                    label="Phone"
                                    withAsterisk
                                    {...getInputProps("phone")}
                                />
                            </Grid.Col>
                            <Grid.Col md={6}>
                                <TextInput
                                    classNames={{
                                        input: "bg-black border-x-0 border-t-0 border-b-1 text-white my-3",
                                        label: "text-white font-play-fair",
                                        required: "text-white",
                                    }}
                                    placeholder="Enter your email"
                                    label="Email"
                                    withAsterisk
                                    {...getInputProps("email")}
                                />
                                <TextInput
                                    classNames={{
                                        input: "bg-black border-x-0 border-t-0 border-b-1 text-white my-3",
                                        label: "text-white font-play-fair",
                                        required: "text-white",
                                    }}
                                    placeholder="Enter your address"
                                    label="Address"
                                    withAsterisk
                                    {...getInputProps("address")}
                                />
                            </Grid.Col>
                        </Grid>
                        <TextInput
                            classNames={{
                                input: "bg-black border-x-0 border-t-0 border-b-1 text-white my-3",
                                label: "text-white font-play-fair",
                                required: "text-white",
                            }}
                            placeholder="Enter the subject"
                            label="Subject"
                            withAsterisk
                            {...getInputProps("subject")}
                        />
                        <Textarea
                            classNames={{
                                input: "bg-black border-x-0 border-t-0 border-b-1 text-white my-3",
                                label: "text-white font-play-fair",
                                required: "text-white",
                            }}
                            maxRows={5}
                            autosize
                            placeholder="Type your message here..."
                            label="Message"
                            withAsterisk
                            {...getInputProps("message")}
                        />
                        <Button type="submit" className="font-serif w-full bg-white hover:bg-slate-200 text-black ">
                            Submit
                        </Button>
                    </form>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Contact;
