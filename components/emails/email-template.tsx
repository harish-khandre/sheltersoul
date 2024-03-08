import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Heading,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  location: string;
  img: string;
}

export const Email = ({ name, img, location }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      Shelter soul, a platform dedicated to making a difference in the lives of
      mentally disabled homeless individuals.{" "}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading as="h1" style={heading}>
          Shelter soul
        </Heading>
        <Text style={paragraph}>
          our user, a platform dedicated to connecting mentally disabled I hope
          this email finds you well. we are writing to you on behalf of homeless
          individuals with the assistance they need. We are immensely grateful
          for your partnership in this endeavor and wanted to share a recent
          report submitted through our platform.
        </Text>
        <Text style={paragraph}>
          <Heading as="h3">Report Details:</Heading>
          <Heading as="h4">Name of the Individual:</Heading>
          <Heading as="h3">{name}</Heading>
          <Heading as="h4">Location:</Heading>
          <Heading as="h3">{location}</Heading>
        </Text>
        <Img src={`${img}`} width="370" height="500" alt="individual" />{" "}
        <Text style={paragraph}>
          <Heading as="h2" style={heading}>
            Urgent Action Needed
          </Heading>
          Based on the information provided, it is evident that urgent
          assistance is needed for the individual mentioned above. We kindly
          request your immediate attention to this matter to ensure that the
          individual receives the necessary support and care.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={location}>
            View Location
          </Button>
        </Section>{" "}
        <Text style={paragraph}>
          <Heading as="h4">Thank You,</Heading>
          Once again, we want to express our sincere appreciation for your
          dedication to helping those in need. Your commitment to making a
          difference is truly commendable, and we are honored to partner with
          you in this mission.
          <Heading as="h4">Warm regards,</Heading>
          <Heading as="h3" style={heading}>
            Shelter soul
          </Heading>
        </Text>
        <Hr style={hr} />{" "}
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

/* const logo = {
  margin: "0 auto",
}; */

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const heading = {
  color: "#0063EB",
};

const btnContainer = {
  textAlign: "left" as const,
};

const button = {
  backgroundColor: "#0063EB",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

/* const footer = {
  color: "#8898aa",
  fontSize: "12px",
}; */
