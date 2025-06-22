"use client";
import { useState } from "react";
export default function RSVP() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async () => {
    await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, paymentId }),
    });
    setSubmitted(true);
  };
  if (submitted) return <p className="p-6">Thank you for your RSVP!</p>;
  return (
    <div className="p-6 space-y-4">
      <input onChange={e=>setName(e.target.value)} placeholder="Name" className="block border p-2 w-full"/>
      <input onChange={e=>setPhone(e.target.value)} placeholder="Phone" className="block border p-2 w-full"/>
      <input onChange={e=>setPaymentId(e.target.value)} placeholder="Payment ID" className="block border p-2 w-full"/>
      <button onClick={handleSubmit} className="bg-blue-600 text-white p-2">Submit</button>
    </div>
  );
}