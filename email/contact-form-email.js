import React from 'react';
import { Html, Body, Container, Section, Text, Heading, Hr, Preview } from '@react-email/components'

const ContactFormEmail = ({ message, senderEmail }) => {
  return (
    <Html>
      <Preview>New message from your portfolio site</Preview>
      <Body>
        <Container>
          <Section style={{ backgroundColor: '#ffffff', border: '1px solid #dddddd', borderRadius: '8px', padding: '20px', marginBottom: '10px' }}>
            <Heading style={{ fontSize: '24px', color: '#333333' }}>You received a new message from the contact form</Heading>
            <Text style={{ fontSize: '16px', color: '#333333', marginBottom: '10px' }}>{message}</Text>
            <Hr style={{ borderTop: '1px solid #dddddd', margin: '20px 0' }} />
            <Text style={{ fontSize: '16px', color: '#333333' }}>The sender's email is: {senderEmail}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactFormEmail;
