'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface PaymentFormProps {
  tenantId: number;
  refreshData?: () => void; // Optionally refresh data after payment
}

export default function PaymentForm({ tenantId, refreshData }: PaymentFormProps) {
  const [amount, setAmount] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      setStatusMessage('❌ Please enter a valid amount.');
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch('/api/pay', {
        method: 'POST',
        body: JSON.stringify({
          tenantId,
          amount: parseFloat(amount),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setStatusMessage('✅ Payment processed successfully!');
        setAmount('');
        if (refreshData) {
          refreshData(); // Refresh data after successful payment
        }
      } else {
        const error = await res.json();
        setStatusMessage(`❌ Payment failed: ${error.error}`);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setStatusMessage(`❌ Payment failed: ${error.message}`);
      } else {
        setStatusMessage(`❌ Payment failed: An unknown error occurred`);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="mt-6 p-6 border rounded-lg bg-stone-100 shadow-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h2 className="text-xl font-semibold mb-4 text-stone-900">Make a Payment</h2>
      
      {/* Input Field */}
      <motion.input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-stone-900"
        placeholder="Enter amount"
        disabled={isLoading}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      />
      
      {/* Submit Button */}
      <motion.button
        type="submit"
        className={`w-full py-3 mt-4 rounded-lg text-white font-semibold ${
          isLoading ? 'bg-stone-500 cursor-not-allowed' : 'bg-stone-700 hover:bg-stone-800'
        }`}
        whileHover={{ scale: isLoading ? 1 : 1.05 }}
        whileTap={{ scale: isLoading ? 1 : 0.95 }}
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Pay Now'}
      </motion.button>
      
      {/* Status Message */}
      {statusMessage && (
        <motion.div
          className={`mt-4 text-center text-sm ${
            statusMessage.startsWith('✅') ? 'text-green-600' : 'text-red-600'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {statusMessage}
        </motion.div>
      )}
    </motion.form>
  );
}
