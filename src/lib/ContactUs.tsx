import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');

    if (!form.current) return;

    emailjs
      .sendForm('service_8krddkj', 'template_43ohzk8', form.current, {
        publicKey: 'Jo4-oNXKoDfd0yWcJ',
      })
      .then(
        () => {
          setStatus('success');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          setStatus('error');
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="Your Name"
        className="contact-input"
        name="user_name"
        required
        value={formData.user_name}
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="Your Email"
        className="contact-input"
        name="user_email"
        required
        value={formData.user_email}
        onChange={handleChange}
      />

      <textarea
        placeholder="Your Message"
        className="contact-input"
        rows={5}
        name="message"
        required
        value={formData.message}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="contact-btn"
        value="Send"
      >
        Send Message
      </button>
      {status === 'success' && (
        <div style={{ color: 'green', marginTop: '1rem' }}>Message sent successfully!</div>
      )}
      {status === 'error' && (
        <div style={{ color: 'red', marginTop: '1rem' }}>Failed to send message. Please try again.</div>
      )}
    </form>
  );
};