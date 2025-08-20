"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "../lib/validators";
import { useState } from "react";

export default function LeadForm() {
  const [ok, setOk] = useState(false);
  const [nonFieldError, setNonFieldError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadInput>({ resolver: zodResolver(leadSchema) });

  const onSubmit = async (data: LeadInput) => {
    setNonFieldError(null);
    if (data.website && data.website.trim().length > 0) return; // honeypot

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setOk(true);
      reset();
      // analytics hook here if needed
    } else if (res.status === 400) {
      // Map DRF serializer errors
      const body = await res.json().catch(() => ({}));
      const messages = Object.values(body).flat().join(" ");
      setNonFieldError(messages || "Please correct the highlighted fields.");
    } else {
      setNonFieldError("Something went wrong. Please try again in a moment.");
    }
  };

  if (ok) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <h3 className="text-lg font-semibold">Thank you!</h3>
        <p className="mt-1 text-slate-700">
          We received your message and will get back to you shortly.
        </p>
        <button
          className="mt-4 inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-white"
          onClick={() => setOk(false)}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {nonFieldError && (
        <div role="alert" className="rounded-md border border-red-200 bg-red-50 p-3 text-sm">
          {nonFieldError}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          {...register("name")}
          aria-invalid={!!errors.name}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          {...register("email")}
          aria-invalid={!!errors.email}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          rows={6}
          {...register("message")}
          aria-invalid={!!errors.message}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium">Source URL (optional)</label>
        <input
          type="url"
          placeholder="https://example.com"
          {...register("source_url")}
          aria-invalid={!!errors.source_url}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-400"
        />
        {errors.source_url && <p className="mt-1 text-xs text-red-600">{errors.source_url.message}</p>}
      </div>

      {/* Honeypot */}
      <div className="hidden">
        <label>Website</label>
        <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}