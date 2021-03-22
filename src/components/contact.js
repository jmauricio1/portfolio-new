import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="section-padding">
      <Container>
        <h2>Let's Chat!</h2>
        <p>Feel free to contact me and we can converse some time 🐱‍🏍</p>
        <Form>
          <Form.Group>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group>
            <Form.Control type="email" placeholder="Your Email" />
            <Form.Text className="text-muted">
              Don't worry, I won't do anything sketchy with your email.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <FormControl as="textarea" placeholder="Your Message..." rows={8}/>
          </Form.Group>
          <Button type="submit">Send</Button>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
