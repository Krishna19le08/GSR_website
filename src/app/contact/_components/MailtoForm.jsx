"use client";

import { useState } from "react";
import { mailto } from "@/config/org-info";
import { buttonClasses } from "@/components/ui/ui";

const topics = [
  "General question",
  "Volunteering",
  "Partnership or CSR",
  "Donation",
  "GSR Tech or SDIN",
  "Media",
];

const field =
  "mt-2 block w-full rounded-xl border border-clay bg-surface px-4 py-3 text-base text-ink placeholder:text-ink-muted focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/25";

// No backend: this builds a mailto: link and hands the message to the
// visitor's own email app.
export default function MailtoForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const body = `${message.trim()}\n\n${name.trim() ? `From: ${name.trim()}` : ""}`.trim();
    window.location.href = mailto(`${topic}${name.trim() ? ` from ${name.trim()}` : ""}`, body);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-clay bg-surface p-6 shadow-[0_24px_48px_-32px_rgb(11_38_24/0.35)] sm:p-8">
      <h3 className="font-display text-h3 font-medium text-ink">Write to us</h3>
      <p className="mt-2 leading-7 text-ink-soft">
        This opens your own email app with your message filled in. Nothing is sent from this website.
      </p>
      <div className="mt-6 space-y-5">
        <label className="block">
          <span className="text-sm font-semibold text-ink">Your name</span>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">What is it about?</span>
          <select className={field} value={topic} onChange={(e) => setTopic(e.target.value)}>
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-ink">Message</span>
          <textarea
            className={`${field} min-h-36`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
          />
        </label>
      </div>
      <button type="submit" className={`${buttonClasses("primary")} mt-6 w-full sm:w-auto`}>
        Open in my email app
      </button>
    </form>
  );
}
