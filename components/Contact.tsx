"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      .then(
        () => {
          setIsSent(true);
          setIsLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          setIsLoading(false);
        }
      );
  };

  const handleReset = () => setIsSent(false);

  return (
    <section
      id="contact"
      className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      {isSent ? (
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4">
            Thanks! Your message was sent.
          </h2>
          <DotLottieReact
            src="https://lottie.host/a9337ebf-50fb-4d8a-939a-553503c62bd4/VR5jVoPp5j.lottie"
            autoplay
            loop={false}
            className="w-[250px] h-[250px] mb-6"
          />
          <Button
            onClick={handleReset}
            className="bg-purple-600 hover:bg-purple-700 transition"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
            <p className="text-gray-400 mt-2">
              Reach out to discuss projects or collaboration opportunities.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target instanceof HTMLInputElement) {
                e.preventDefault();
              }
            }}
            className="space-y-6 w-full max-w-xl"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="focus:ring-2 focus:ring-purple-500 focus:outline-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-8 bg-[#8fd3d5] text-black font-semibold hover:bg-[#547e80] transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </>
      )}
    </section>
  );
}
