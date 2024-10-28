// EmailTemplate.tsx
import {
    Body,
    Container,
    Column,
    Row,
    Text,
    Heading,
    Button,
    Html,
  } from "@react-email/components";
  
  interface EmailTemplateProps {
    name: string;
    email: string;
    company:string;
    service: string;
    message: string;
    spending:string;
    phone?:string;
  }
  
  const EmailTemplate = ({
    name,
    email,
    company,
    service,
    message,
    spending,
    phone
  }: EmailTemplateProps) => (
    <Html>
      <Body style={{ margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Row>
            <Column>
            <Heading>Your message has been received!</Heading>
            <Text>
            Thank you for reaching out! Here are the details of your message:
          </Text>
             <Text>
                <strong>Name:</strong> {name}
              </Text>
              <Text>
                <strong>Email:</strong> {email}
              </Text>
              <Text>
                <strong>Company Name:</strong> {company}
              </Text>
              <Text>
                <strong>Service:</strong> {service}
              </Text>
              <Text>
                <strong>phone:</strong> {phone}
              </Text>
              <Text>
                <strong>Add budget per month:</strong> {spending}
              </Text>
              <Text>
                <strong>importent question:</strong>
              </Text>
              <Text>{message}</Text>

              <Text>We will get back to you soon.</Text>
              <Button
                href="#"
                style={{
                  backgroundColor: "#007bff",
                  color: "#ffffff",
                  padding: "10px 20px",
                  textDecoration: "none",
                  borderRadius: "5px",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Contact Us
              </Button>
            </Column>
          </Row>
        </Container>
      </Body>
    </Html>
  );
  
  export default EmailTemplate;
  