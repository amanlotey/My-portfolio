// components/Contact.tsx
export default function Contact() {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-semibold">Let's Connect</h2>
      <p className="text-gray-600">Reach out to discuss projects or collaboration opportunities.</p>
      <p>
        📧{" "}
        <a
          href="mailto:amanlotey0161@gmail.com"
          className="text-blue-600 underline"
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
          className="text-blue-600 underline"
        >
          LinkedIn Profile
        </a>
      </p>
    </div>
  );
}
