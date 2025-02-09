'use client'
import React, { useState } from "react";

const Mail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateMailtoLink = () => {
    const { name, email, subject, message } = formData;
    return `mailto:snehal2004@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`)}`;
  };

  return (
    <div className="max-w-lg p-6 bg-white shadow-lg rounded-3xl">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send a mail</h2>
      <div className="space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2 border border-gray-300 rounded" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-2 border border-gray-300 rounded" />
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full p-2 border border-gray-300 rounded" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
        <a href={generateMailtoLink()} className="block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Send Email
        </a>
      </div>
    </div>
  );
};

export default Mail;
