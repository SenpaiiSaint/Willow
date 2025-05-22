"use client";
import { RentPaymentCard } from "@/app/components/RentPaymentCard";

export default function TenantPaymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-purple-50 to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 flex flex-col items-center py-12 px-4">
      <div className="max-w-xl w-full mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2 drop-shadow-sm">Pay Your Rent</h1>
        <p className="text-gray-600 dark:text-gray-300 text-base mb-4">
          Securely pay your rent online. Your payment details are encrypted and never stored.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
          <div className="flex-1 bg-white/80 dark:bg-gray-900/80 rounded-lg shadow p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Next Rent Due</div>
            <div className="text-lg font-semibold text-blue-700 dark:text-blue-300">June 1, 2024</div>
          </div>
          <div className="flex-1 bg-white/80 dark:bg-gray-900/80 rounded-lg shadow p-4">
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Amount Due</div>
            <div className="text-lg font-semibold text-emerald-600 dark:text-emerald-300">$1,200.00</div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-lg relative">
        {/* Gradient blobs background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 blur-2xl opacity-30" />
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-emerald-300 blur-2xl opacity-30" />
        </div>
        <div className="rounded-2xl shadow-2xl bg-white/90 dark:bg-gray-950/90 p-8">
          <RentPaymentCard />
        </div>
      </div>
    </div>
  );
}
