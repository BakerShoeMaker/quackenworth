"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus("error");
      setErrorMsg(data.error ?? "Something went wrong. Please try again.");
    } else {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-green-50 border border-green-200 px-8 py-12 text-center">
        <p className="text-2xl font-bold text-zinc-700 mb-2">Message Sent!</p>
        <p className="text-zinc-500">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-[#00aeef] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-semibold text-zinc-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#00aeef] focus:border-transparent transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-semibold text-zinc-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#00aeef] focus:border-transparent transition"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-semibold text-zinc-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#00aeef] focus:border-transparent transition resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-[#00aeef] text-white font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

    </form>
  );
}
