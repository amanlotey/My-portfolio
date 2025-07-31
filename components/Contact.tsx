"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/Button"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can integrate this with Formspree, Resend, or Nodemailer API later
    alert("Message sent!")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="max-w-xl mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
        <p className="text-muted-foreground mt-2">
          Reach out to discuss projects or collaboration opportunities.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>

      <div className="text-center mt-10 space-y-2 text-sm text-muted-foreground">
        <p>
          📧{" "}
          <a
            href="mailto:amanlotey0161@gmail.com"
            className="underline hover:text-primary"
          >
            amanlotey0161@gmail.com
          </a>
        </p>
        <p>
          🔗{" "}
          <a
            href="https://linkedin.com/in/amandeep-singh-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </section>
  )
}
