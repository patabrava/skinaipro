import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav-tab mb-lg">
      <Link href="/" className="nav-tab-item active">🏠 Home</Link>
      <Link href="/dashboard" className="nav-tab-item">📊 Dashboard</Link>
      <Link href="/signin" className="nav-tab-item">🔑 Sign In</Link>
    </nav>
  );
} 