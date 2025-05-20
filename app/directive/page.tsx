"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserIcon, HomeModernIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

export default function Directive() {
    const [showLoader, setShowLoader] = useState(true);
    const { data: session } = useSession();
    const router = useRouter();
  
    useEffect(() => {
      const timer = setTimeout(() => setShowLoader(false), 2000); // 2 seconds
      return () => clearTimeout(timer);
    }, []);
  
    const setRole = (role: 'owner' | 'tenant') => {
      localStorage.setItem('user-role', role);
      router.push('/dashboard');
    };
  
    if (showLoader) {
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
          <Image src="/gif/loading1.gif" alt="Loading..." width={600} height={600} className="mb-4" />
          <span className="text-lg text-gray-500">Loading...</span>
        </div>
      );
    }
  
    if (!session) return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <span className="text-lg text-gray-500">Loading session...</span>
      </div>
    );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-50 to-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md flex flex-col items-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center mb-2">
            <UserIcon className="w-8 h-8 text-sky-500" />
          </div>
          <h2 className="text-2xl font-bold mb-1 text-gray-900">Welcome, {session.user?.name || 'User'}!</h2>
          <p className="text-gray-600">Please select your role to continue:</p>
        </div>
        <div className="flex gap-4 w-full mt-4">
          <button
            onClick={() => setRole('owner')}
            className="flex-1 flex flex-col items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-4 rounded-lg shadow transition font-semibold focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <HomeModernIcon className="w-6 h-6" />
            Owner
          </button>
          <button
            onClick={() => setRole('tenant')}
            className="flex-1 flex flex-col items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg shadow transition font-semibold focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            <UserIcon className="w-6 h-6" />
            Tenant
          </button>
        </div>
      </div>
    </div>
  );
}
