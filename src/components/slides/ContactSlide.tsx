"use client";

import { Card } from "@/components/ui/Card";

export function ContactSlide() {
  return (
    <div className="mx-auto min-h-full max-w-6xl px-4 pt-24 pb-20">
      <header className="mb-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Contact</h2>
        <p className="mt-1 text-sm text-cyan-100/80">
          Reach out directly or connect on social.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card className="p-6">
          <div className="text-sm font-bold text-white">Contact form</div>
          <p className="mt-2 text-xs text-cyan-100/70">
            This form uses Web3Forms to send messages to my inbox.
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="mt-4 space-y-3 text-sm"
          >
            <input
              type="hidden"
              name="access_key"
              value="d1849f5d-64d8-4738-86bd-cbb9bc02f88f"
            />
            {/* simple bot check field (hidden) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />

            <div className="space-y-1">
              <label
                htmlFor="contact-name"
                className="text-xs font-medium text-cyan-100/80"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-cyan-400/30 bg-slate-950/40 px-3 py-2 text-sm text-cyan-50 outline-none ring-0 placeholder:text-cyan-200/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-email"
                className="text-xs font-medium text-cyan-100/80"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-cyan-400/30 bg-slate-950/40 px-3 py-2 text-sm text-cyan-50 outline-none ring-0 placeholder:text-cyan-200/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-message"
                className="text-xs font-medium text-cyan-100/80"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                className="w-full rounded-xl border border-cyan-400/30 bg-slate-950/40 px-3 py-2 text-sm text-cyan-50 outline-none ring-0 placeholder:text-cyan-200/40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50"
                placeholder="Tell me a bit about what you’d like to work on..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Send message
            </button>
          </form>
        </Card>

        <Card className="p-6">
          <div className="text-sm font-bold text-white">Direct</div>
          <div className="mt-4 space-y-3 text-sm">
            <a
              className="block rounded-xl border border-cyan-400/20 bg-slate-950/30 px-4 py-3 text-cyan-50/90 hover:bg-cyan-400/10"
              href="mailto:anubhav.ranjan141@gmail.com"
            >
              <div className="text-xs text-cyan-200/80">Email</div>
              <div className="font-semibold">anubhav.ranjan141@gmail.com</div>
            </a>
            <a
              className="block rounded-xl border border-cyan-400/20 bg-slate-950/30 px-4 py-3 text-cyan-50/90 hover:bg-cyan-400/10"
              href="tel:+91830268036"
            >
              <div className="text-xs text-cyan-200/80">Phone</div>
              <div className="font-semibold">+91 830268036</div>
            </a>

            <div className="pt-2 text-xs text-cyan-100/70">
              Or reach me on:
              <div className="mt-2 flex flex-wrap gap-2">
                <a
                  className="rounded-full bg-cyan-400 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
                  href="https://www.linkedin.com/in/anubhav-ranjan-a4663432a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="rounded-full border border-cyan-400/40 px-4 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-400/10"
                  href="https://github.com/Anubhav141205"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-10 text-center text-xs text-cyan-100/60">
        © {new Date().getFullYear()} Anubhav Ranjan
      </div>
    </div>
  );
}

