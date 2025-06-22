"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
export default function Admin() {
  const { data: session } = useSession();
  const [rsvps, setRsvps] = useState([]);
  useEffect(() => {
    if (session) {
      fetch("/api/rsvp").then(res=>res.json()).then(setRsvps);
    }
  }, [session]);
  if (!session) return <button onClick={()=>signIn("google")} className="p-4 bg-red-600 text-white">Sign in with Google</button>;
  return (
    <div className="p-6">
      <button onClick={()=>signOut()} className="mb-4">Sign Out</button>
      <h2 className="text-2xl mb-2">RSVP List</h2>
      <ul className="list-disc pl-5">
        {rsvps.map((r, i) => <li key={i}>{r.name} - {r.phone}</li>)}
      </ul>
      <p className="mt-4">Contact: +25470334734</p>
    </div>
  );
}