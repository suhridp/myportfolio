import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import posts from "../../data/posts";

function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function readingTime(body) {
  const words = body
    .map((b) => (typeof b === "string" ? b : b.h || b.code || (b.list || []).join(" ")))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function Block({ block }) {
  if (typeof block === "string") return <p>{block}</p>;
  if (block.h) return <h2>{block.h}</h2>;
  if (block.list)
    return (
      <ul>
        {block.list.map((li) => (
          <li key={li}>{li}</li>
        ))}
      </ul>
    );
  if (block.code)
    return (
      <pre>
        <code>{block.code}</code>
      </pre>
    );
  return null;
}

export function BlogList() {
  return (
    <section className="blog-page page-section">
      <Container>
        <header className="page-head">
          <h1 className="page-title">Blog</h1>
          <p className="page-lede">
            Notes from my research and side projects: what I built, what I measured, and what
            surprised me.
          </p>
        </header>

        {posts.length === 0 ? (
          <p className="page-lede">No posts yet. The first one is on its way.</p>
        ) : (
          <ol className="post-list">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="post-row">
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  <span className="post-row-main">
                    <strong>{p.title}</strong>
                    <span>{p.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        )}
      </Container>
    </section>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="blog-page page-section">
        <Container className="post">
          <h1 className="page-title">Post not found</h1>
          <p className="page-lede">This post may have been renamed or removed.</p>
          <Link to="/blog" className="btn-ghost">
            See all posts
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="blog-page page-section">
      <Container className="post">
        <Link to="/blog" className="post-back">
          <FiArrowLeft aria-hidden="true" /> All posts
        </Link>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span>{readingTime(post.body)} min read</span>
        </p>
        {post.tags?.length > 0 && (
          <ul className="pj-stack">
            {post.tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <div className="post-body">
          {post.body.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
