import Link from "next/link";

export function DashNavigation() {
  return (
    <nav className="mb-6 border-b pb-4">
      <ul className="flex gap-6 text-lg">
        <li><Link href="/properties" className="hover:underline">Properties</Link></li>
        <li><Link href="/tenants" className="hover:underline">Tenants</Link></li>
        <li><Link href="/maintenance" className="hover:underline">Maintenance</Link></li>
        <li><Link href="/financials" className="hover:underline">Financials</Link></li>
        <li><Link href="/messages" className="hover:underline">Messages</Link></li>
      </ul>
    </nav>
  );
} 