import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  FiCopy,
  FiCheck,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiMapPin,
  FiFileText,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import profile from "../../data/profile";

// Messages are delivered by FormSubmit (https://formsubmit.co) to profile.email.
// The very first message triggers a one-time confirmation email from FormSubmit;
// click "Activate" in it and every later message arrives normally.
const ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`;

const TOPICS = ["Research collaboration", "Job or internship", "A project or post", "Something else"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", topic: TOPICS[0], message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `${form.topic} — from ${form.name || "your portfolio"}`
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
          topic: form.topic,
          message: form.message,
          _subject: `Portfolio: ${form.topic} — ${form.name}`,
          _replyto: form.email,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || String(data.success) !== "true") {
        throw new Error(data.message || "The message service didn't accept the message.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", topic: TOPICS[0], message: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Couldn't reach the message service.");
    }
  };

  return (
    <section className="page-section ct-page">
      <Container>
        <header className="ct-hero">
          <h1 className="ct-title">Let's talk.</h1>
          <p className="ct-lede">
            I'm a {profile.currentRole.title} at {profile.currentRole.org}, open to research
            collaborations and AI/LLM roles. Email is the quickest way to reach me.
          </p>

          <div className="ct-email-row">
            <a href={`mailto:${profile.email}`} className="ct-email">
              {profile.email}
            </a>
            <button type="button" className="icon-btn ct-copy" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
            <span className="ct-copied" aria-live="polite">
              {copied ? "Copied" : ""}
            </span>
          </div>

          <ul className="ct-tiles">
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <FiLinkedin aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noreferrer">
                <FiGithub aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <FiPhone aria-hidden="true" />
                <span>{profile.phone}</span>
              </a>
            </li>
            <li>
              <Link to="/resume">
                <FiFileText aria-hidden="true" />
                <span>Resume</span>
              </Link>
            </li>
          </ul>
          <p className="ct-where">
            <FiMapPin aria-hidden="true" /> {profile.location}
          </p>
        </header>

        <form className="ct-form" onSubmit={handleSubmit}>
          <div className="ct-form-head">
            <h2>Or send a message here</h2>
            <p>It goes straight to my inbox, and I'll reply to the address you give.</p>
          </div>

          <fieldset className="ct-topics">
            <legend>What's it about?</legend>
            {TOPICS.map((t) => (
              <label key={t} className={`chip ${form.topic === t ? "is-active" : ""}`}>
                <input
                  type="radio"
                  name="topic"
                  value={t}
                  checked={form.topic === t}
                  onChange={update("topic")}
                />
                {t}
              </label>
            ))}
          </fieldset>

          <div className="ct-fields">
            <label>
              Your name
              <input type="text" required value={form.name} onChange={update("name")} autoComplete="name" />
            </label>
            <label>
              Your email
              <input type="email" required value={form.email} onChange={update("email")} autoComplete="email" />
            </label>
          </div>
          <label>
            Message
            <textarea required rows={6} value={form.message} onChange={update("message")} />
          </label>

          <div className="ct-submit">
            <button type="submit" className="btn-solid" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
              <FiSend aria-hidden="true" style={{ marginLeft: "0.5rem" }} />
            </button>
            <div aria-live="polite" className="ct-status">
              {status === "sent" && (
                <p className="form-note form-note--ok">Message sent. I'll get back to you by email.</p>
              )}
              {status === "error" && (
                <p className="form-note form-note--err">
                  Your message wasn't sent: {error} You can <a href={mailtoHref}>email me directly</a>{" "}
                  instead.
                </p>
              )}
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Contact;
