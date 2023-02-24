import { Container } from "@mantine/core";
import React from "react";

const GoogleMap: React.FC = (): JSX.Element => {
    return (
        <Container fluid px={0}>
            <iframe
                title="valenzuela map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61743.96749376663!2d120.94035035787944!3d14.712706871070814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b3e8633ee9ff%3A0xc8a77e7c82cd2370!2sValenzuela%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1676730979543!5m2!1sen!2sph"
                className="border-0 w-full h-[600px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </Container>
    );
};

export default GoogleMap;
