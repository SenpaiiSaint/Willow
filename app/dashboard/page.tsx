'use client';

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";



export default function Dashboard() {
    const { data: session } = useSession();
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('user-role');
        setRole(storedRole);
    }, []);

    if (!session) return <p>Loading session...</p>;
    if (!role) return <p>Redirecting to role selector...</p>;

    return (
        <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Welcome {session.user?.name} ({role})</h1>

      {role === 'owner' && (
        <div>
          <h2 className="text-xl font-semibold">Owner Dashboard</h2>
          <ul>
            <li>🏘 View and manage properties</li>
            <li>📊 View financials</li>
            <li>👥 Manage tenants</li>
          </ul>
        </div>
      )}

      {role === 'tenant' && (
        <div>
          <h2 className="text-xl font-semibold">Tenant Dashboard</h2>
          <ul>
            <li>📝 View lease details</li>
            <li>💳 Pay rent</li>
            <li>🔧 Submit maintenance requests</li>
          </ul>
        </div>
      )}
    </div>
    )
}