import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Let’s work together</h2>
          <p className="mt-3 text-white/75">Have a challenge in mind or just want to say hi? Drop a message and I’ll get back to you.</p>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-white/80">Name</label>
              <input
                id="name"
                type="text"
                required
                className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Ada Lovelace"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-white/80">Email</label>
              <input
                id="email"
                type="email"
                required
                className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm text-white/80">Message</label>
            <textarea
              id="message"
              rows={5}
              required
              className="rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 transition"
          >
            <Mail className="h-4 w-4" />
            Send message
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-white/50">Or email me at <a href="mailto:hello@example.com" className="underline hover:text-white/70">hello@example.com</a></p>
      </div>
    </section>
  );
}
