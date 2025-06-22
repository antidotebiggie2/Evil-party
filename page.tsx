import Link from "next/link";
export default function Home() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Evil Party 🎉</h1>
      <div className="space-x-4">
        <Link href="/rsvp">RSVP</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </main>
  );
}