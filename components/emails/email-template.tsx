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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const Email = ({ name, img, location }: EmailProps) => (
  <Html>
    <Head />
    <Preview>
      Selp, a platform dedicated to making a difference in the lives of mentally
      disabled homeless individuals.{" "}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading as="h1" style={heading}>
          Selp
        </Heading>
        <Text style={paragraph}>
          I hope this email finds you well. I'm writing to you on behalf of
          Sheltered Soul, a platform dedicated to connecting mentally disabled
          homeless individuals with the assistance they need. We're immensely
          grateful for your partnership in this endeavor and wanted to share a
          recent report submitted through our platform.
        </Text>
        <Text style={paragraph}>
          <Heading as="h3">Report Details:</Heading>
          <Heading as="h4">Name of the Individual:</Heading>
          <Heading as="h3">{name}</Heading>
          <Heading as="h4">Location:</Heading>
          <Heading as="h3">{location}</Heading>
        </Text>
        <Img
          src={`${img}`}
          width="370"
          height="500"
          alt="individual"
          // style={logo}
        />{" "}
        <Text style={paragraph}>
          <Heading as="h2" style={heading}>
            Urgent Action Needed
          </Heading>
          Based on the information provided, it's evident that urgent assistance
          is needed for the individual mentioned above. We kindly request your
          immediate attention to this matter to ensure that the individual
          receives the necessary support and care.
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
          difference is truly commendable, and we're honored to partner with you
          in this mission.
          <Heading as="h4">Warm regards,</Heading>
          <Heading as="h3" style={heading}>
            Selp
          </Heading>
        </Text>
        <Hr style={hr} />{" "}
      </Container>
    </Body>
  </Html>
);

Email.PreviewProps = {
  name: "Alan",
  location: "https://maps.app.goo.gl/nyeQLsL5sdAMcVqX9",
  img: "https://images.unsplash.com/photo-1682687221175-fd40bbafe6ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
} as EmailProps;

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
