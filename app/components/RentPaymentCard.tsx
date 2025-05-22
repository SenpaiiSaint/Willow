"use client";
import React, { useState } from "react";
import { Card } from "@/app/components/Card";
import { Button } from "@/app/components/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/app/components/Dialog";
import { Input } from "@/app/components/Input";
import { Label } from "@/app/components/Label";

// Demo rent data
const demoLatestRent = {
  amount: 1200,
  date: new Date().toISOString(),
  description: "Monthly rent for May 2024",
  isLate: false,
};

export function RentPaymentCard() {
  const [showPayDialog, setShowPayDialog] = useState(false);
  const [isPaying, setIsPaying] = useState(false);

  function handlePayRent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsPaying(true);
    setTimeout(() => {
      setIsPaying(false);
      setShowPayDialog(false);
      // In real app, mark rent as paid
    }, 1200);
  }

  const latestRent = demoLatestRent;

  return (
    <Card
      className={
        "mb-8 relative overflow-hidden transition-all duration-500" +
        (showPayDialog ? " ring-4 ring-blue-400/60 scale-[1.02] shadow-2xl" : "")
      }
    >
      {/* Gradient blobs background */}
      <div className="pointer-events-none absolute inset-0 -z-10 transition-all duration-500">
        <div
          className={
            "absolute -top-16 -left-16 h-56 w-56 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 blur-2xl transition-all duration-500" +
            (showPayDialog ? " opacity-60 scale-110" : " opacity-30")
          }
        />
        <div
          className={
            "absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-emerald-300 blur-2xl transition-all duration-500" +
            (showPayDialog ? " opacity-60 scale-110" : " opacity-30")
          }
        />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-100">Rent Payment</h2>
        {latestRent && (
          <Dialog open={showPayDialog} onOpenChange={setShowPayDialog}>
            <DialogTrigger asChild>
              <Button variant="primary">Pay Rent</Button>
            </DialogTrigger>
            <DialogContent>
              {/* Gradient blobs background for dialog */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 opacity-40 blur-2xl" />
                <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-gradient-to-br from-purple-400 via-blue-400 to-emerald-300 opacity-40 blur-2xl" />
                <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tl from-pink-400 via-blue-300 to-purple-400 opacity-30 blur-2xl" />
                <div className="absolute top-8 right-1/3 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-400 opacity-30 blur-2xl" />
                <div className="absolute bottom-8 left-1/4 h-16 w-16 rounded-full bg-gradient-to-tr from-yellow-300 via-pink-400 to-blue-400 opacity-20 blur-2xl" />
              </div>
              <DialogHeader>
                <DialogTitle>Pay Rent</DialogTitle>
                <DialogDescription>Enter your payment details to pay your rent.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handlePayRent} className="space-y-4">
                <div>
                  <Label htmlFor="amount">Amount</Label>
                  <Input id="amount" value={latestRent.amount} disabled className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="card">Card Number</Label>
                  <Input id="card" placeholder="1234 5678 9012 3456" required className="mt-1" />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Label htmlFor="exp">Expiry</Label>
                    <Input id="exp" placeholder="MM/YY" required className="mt-1" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" required className="mt-1" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" variant="primary" isLoading={isPaying}>Pay</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>
      {latestRent ? (
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold text-gray-400 dark:text-red-500">${latestRent.amount}</div>
          <div className="text-gray-400">Due: {new Date(latestRent.date).toLocaleDateString()}</div>
          <div className="text-gray-400">{latestRent.description}</div>
        </div>
      ) : (
        <div className="text-gray-400">No rent due at this time.</div>
      )}
    </Card>
  );
} 