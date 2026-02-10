"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setStatus(result.message);
    if (result.success) setFormData({ name: "", email: "", message: "" });
  };

  return (
<div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl border-4 border-black-300 shadow-md object-cover bg-white mb-2 sm:mb-4">
       <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <i className="far fa-user font-bold text-gray-800"></i> <label className="font-bold text-gray-800 text-lg sm:text-xl mb-1 sm:mb-2" htmlFor="">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nama"
          required
          className="text-gray-800 w-full p-2 mb-3 border-4 border-black-300 rounded-lg"
        />
        <i className="fas fa-envelope font-bold text-gray-800"></i> <label className="font-bold text-gray-800 text-lg sm:text-xl mb-1 sm:mb-2"  htmlFor="">Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
          className="text-gray-800 w-full p-2 mb-3 border-4 border-black-300 rounded-lg"
        />
        <i className="fas fa-comments font-bold text-gray-800"></i> <label className="font-bold text-gray-800 text-lg sm:text-xl mb-1 sm:mb-2"  htmlFor="">Message</label>
        <input
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message..."
          required
          className="text-gray-800 w-full p-2 mb-3 border-4 border-black-300 rounded-lg"
        ></input>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send!!!
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm text-gray-700">{status}</p>}
    </div>
</div>
  );
}
