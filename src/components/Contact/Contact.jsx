import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import profile from "../../data/profile";

// Messages are delivered by FormSubmit (https://formsubmit.co) to profile.email.
// The very first message triggers a one-time confirmation email from FormSubmit;
// click "Activate" in it and every later message arrives normally.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio message from ${form.name || "a visitor"}`
  )}&body=${encodeURIComponent(form.message)}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== "true") {
        throw new Error(data.message || "The message service didn't accept the message.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Couldn't reach the message service.");
    }
  };

  return (
    <section className="page-section contact-page">
      <Container>
        <header className="page-head">
          <h1 className="page-title">Get in touch</h1>
          <p className="page-lede">
            Research collaborations, roles, or questions about my work. I usually reply within a
            couple of days.
          </p>
        </header>

        <div className="contact-grid">
          <aside className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-row">
              <span className="contact-icon"><FiMail aria-hidden="true" /></span>
              <span>
                <small>Email</small>
                {profile.email}
              </span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-row">
              <span className="contact-icon"><FiPhone aria-hidden="true" /></span>
              <span>
                <small>Phone</small>
                {profile.phone}
              </span>
            </a>
            <div className="contact-row">
              <span className="contact-icon"><FiMapPin aria-hidden="true" /></span>
              <span>
                <small>Based in</small>
                {profile.location}
              </span>
            </div>
            <div className="about-links">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="pj-link">
                <FiLinkedin aria-hidden="true" /> LinkedIn
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="pj-link">
                <FiGithub aria-hidden="true" /> GitHub
              </a>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="block-title">Send a message</h2>
            <label>
              Your name
              <input type="text" required value={form.name} onChange={update("name")} autoComplete="name" />
            </label>
            <label>
              Your email
              <input type="email" required value={form.email} onChange={update("email")} autoComplete="email" />
            </label>
            <label>
              Message
              <textarea required rows={5} value={form.message} onChange={update("message")} />
            </label>

            <button type="submit" className="btn-solid" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
              <FiSend aria-hidden="true" style={{ marginLeft: "0.5rem" }} />
            </button>

            <div aria-live="polite">
              {status === "sent" && (
                <p className="form-note form-note--ok">Message sent. I'll get back to you by email.</p>
              )}
              {status === "error" && (
                <p className="form-note form-note--err">
                  Your message wasn't sent: {error} You can{" "}
                  <a href={mailtoHref}>email me directly</a> instead.
                </p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
