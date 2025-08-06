import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Twitch,
  Send,
} from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSent(true);
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section className="page-section contact-section">
      <Container>
        {/* Heading */}
        <Row className="text-center mb-4">
          <h1 className="display-6 fw-semibold mb-2">
            Get in <span className="accent">Touch</span>
          </h1>
          <p className="text-muted lead mb-0">
            Have a project in mind or want to collaborate? I’m always open to
            discussing new opportunities.
          </p>
        </Row>

        <Row className="g-4">
          {/* Left: Contact Info */}
          <Col md={5}>
            <Card className="contact-card h-100">
              <Card.Body>
                <h5 className="mb-4">Contact Information</h5>

                {/* Email (horizontal) */}
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-pill me-3">
                    <Mail size={18} />
                  </div>
                  <div className="w-100">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                      <span className="fw-medium me-sm-3">Email:</span>
                      <span className="text-sm-end">
                        <a
                          href="mailto:suhridpaul6@gmail.com"
                          className="link-contrast me-2 d-inline-block"
                        >
                          suhridpaul6@gmail.com
                        </a>
                        
                      </span>
                    </div>
                  </div>
                </div>

                {/* Phone (horizontal) */}
                <div className="d-flex align-items-center mb-3">
                  <div className="icon-pill me-3">
                    <Phone size={18} />
                  </div>
                  <div className="w-100 d-flex justify-content-between align-items-center">
                    <span className="fw-medium me-3">Phone:</span>
                    <a href="tel:+918013549912" className="link-contrast">
                      +91 8013549912
                    </a>
                  </div>
                </div>

                {/* Location (horizontal) */}
                <div className="d-flex align-items-center">
                  <div className="icon-pill me-3">
                    <MapPin size={18} />
                  </div>
                  <div className="w-100 d-flex justify-content-between align-items-center">
                    <span className="fw-medium me-3">Location:</span>
                    <span className="text-muted">Kolkata, India</span>
                  </div>
                </div>

                <hr className="my-4 opacity-25" />

                {/* Social */}
                <h6 className="mb-3">Connect with me</h6>
                <div className="d-flex gap-2">
                  <a
                    className="social-btn"
                    href="https://linkedin.com/in/suhridp"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    className="social-btn"
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter/X"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    className="social-btn"
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    className="social-btn"
                    href="https://twitch.tv/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitch"
                  >
                    <Twitch size={18} />
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: Form (horizontal) */}
          <Col md={7}>
            <Card className="contact-card">
              <Card.Body>
                <h5 className="mb-4">Send a Message</h5>

                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={4} className="text-sm-end">
                      Your Name
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="text"
                        required
                        placeholder="Your Name..."
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-3" controlId="email">
                    <Form.Label column sm={4} className="text-sm-end">
                      Your Email
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        type="email"
                        required
                        placeholder="you@example.com"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mb-4" controlId="message">
                    <Form.Label column sm={4} className="text-sm-end">
                      Your Message
                    </Form.Label>
                    <Col sm={8}>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        required
                        placeholder="Hello, I'd like to talk about..."
                      />
                    </Col>
                  </Form.Group>

                  <div className="text-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="cosmic-button"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send size={16} className="ms-2" />
                    </Button>
                  </div>

                  {sent && (
                    <div className="alert alert-success mt-3 py-2 mb-0">
                      Message sent! I’ll get back to you soon.
                    </div>
                  )}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
