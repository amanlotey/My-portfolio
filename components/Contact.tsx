'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/Button"
import { useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [isSent, setIsSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setIsSent(true)
      setForm({ name: "", email: "", message: "" })
    }, 500)
  }

  const handleReset = () => {
    setIsSent(false)
  }

  return (
    <section id="contact" className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {isSent ? (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">Thanks! Your message was sent.</h2>
          <DotLottieReact
            src="https://lottie.host/a9337ebf-50fb-4d8a-939a-553503c62bd4/VR5jVoPp5j.lottie"
            autoplay
            loop={false}
            className="w-[250px] h-[250px] mb-6"
          />
          <Button onClick={handleReset} className="bg-purple-600 hover:bg-purple-700 transition">
            Send Another Message
          </Button>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
            <p className="text-muted-foreground mt-2 text-gray-400">
              Reach out to discuss projects or collaboration opportunities.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
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

          <div className="text-center mt-10 space-y-2 text-sm text-gray-400">
            <p>
              📧{" "}
              <a
                href="mailto:amanlotey0161@gmail.com"
                className="underline hover:text-purple-400"
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
                className="underline hover:text-purple-400"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>
        </>
      )}
    </section>
  )
}
