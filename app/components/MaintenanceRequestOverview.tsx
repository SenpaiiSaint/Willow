"use client";

import React from 'react';
import { Button } from '@/app/components/Button';
import { Card } from '@/app/components/Card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/app/components/Dialog';
import { Input } from '@/app/components/Input';

const requests = [
  { name: 'MR-2340', issue: 'Leaky faucet in kitchen', status: 'Open' },
  { name: 'MR-2344', issue: 'Broken window in bedroom', status: 'In Progress' },
  { name: 'MR-1385', issue: 'AC not cooling', status: 'Completed' },
  { name: 'MR-1393', issue: 'Clogged shower drain', status: 'Open' },
  { name: 'MR-1264', issue: 'Heater not working', status: 'Completed' },
  { name: 'MR-434', issue: 'Garage door stuck', status: 'In Progress' },
  { name: 'MR-1234', issue: 'Smoke detector beeping', status: 'Completed' },
  { name: 'MR-1235', issue: 'Dishwasher leaking', status: 'Open' },
  { name: 'MR-1236', issue: 'Broken closet door', status: 'Completed' },
  { name: 'MR-1237', issue: 'Pest control needed', status: 'Open' },
  { name: 'MR-1238', issue: 'No hot water', status: 'Completed' },
  { name: 'MR-1239', issue: 'Loose bathroom tiles', status: 'In Progress' },
  { name: 'MR-1240', issue: 'Washing machine not spinning', status: 'Completed' },
  { name: 'MR-1241', issue: 'Broken mailbox lock', status: 'Open' },
  { name: 'MR-1242', issue: "Window won't close", status: 'Completed' },
  { name: 'MR-1243', issue: 'Leaky roof', status: 'In Progress' },
  { name: 'MR-1244', issue: 'Broken light switch', status: 'Completed' },
  { name: 'MR-1245', issue: 'Toilet running', status: 'Open' },
  { name: 'MR-1246', issue: 'Cracked tiles in kitchen', status: 'Completed' },
  { name: 'MR-1247', issue: 'Noisy fridge', status: 'Open' },
  { name: 'MR-1248', issue: 'Loose doorknob', status: 'Completed' },
  { name: 'MR-1249', issue: 'Broken shower head', status: 'In Progress' },
  { name: 'MR-1250', issue: 'Garage light out', status: 'Completed' },
  { name: 'MR-1251', issue: 'Dripping bathroom faucet', status: 'Open' },
  { name: 'MR-1252', issue: 'Broken fence panel', status: 'Completed' },
  { name: 'MR-1253', issue: 'Loose stair railing', status: 'In Progress' },
  { name: 'MR-1254', issue: 'No power in outlet', status: 'Open' }
];

export function MaintenanceRequestOverview() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredItems = requests.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <Card className="sm:mx-auto sm:max-w-xl mb-8 p-6">
      <h3 className="font-medium text-gray-900 dark:text-gray-50">
        Maintenance Request Overview
      </h3>
      <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mt-6">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all"
          style={{ width: "78.2%" }}
        />
      </div>
      <ul role="list" className="mt-3 flex items-center justify-between">
        <li>
          <div className="flex items-center space-x-2">
            <span
              className="size-2.5 rounded-sm bg-blue-500 dark:bg-blue-500"
              aria-hidden={true}
            />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Fulfilled
            </span>
          </div>
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            456{' '}
            <span className="font-normal text-gray-500 dark:text-gray-500">
              (23.1%)
            </span>
          </p>
        </li>
        <li>
          <div className="flex items-center justify-end space-x-2">
            <span
              className="size-2.5 rounded-sm bg-gray-200 dark:bg-gray-800"
              aria-hidden={true}
            />
            <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
              Open
            </span>
          </div>
          <p className="font-semibold text-gray-900 dark:text-gray-50">
            1,518{' '}
            <span className="font-normal text-gray-500 dark:text-gray-500">
              (76.9%)
            </span>
          </p>
        </li>
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-900 dark:text-gray-50">
          Maintenance Requests
        </p>
        <p className="text-xs font-medium uppercase tracking-wide text-gray-900 dark:text-gray-50">
          Status
        </p>
      </div>
      <ul
        role="list"
        className="divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
      >
        {requests.slice(0, 5).map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex flex-col">
              <span className="font-medium text-gray-900 dark:text-gray-50">{item.name}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{item.issue}</span>
            </div>
            <span>
              <StatusBadge status={item.status} />
            </span>
          </li>
        ))}
      </ul>
      <div className="absolute inset-x-0 bottom-0 flex justify-center rounded-b-lg bg-gradient-to-t from-white to-transparent dark:from-[#090E1A] py-7">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Show more</Button>
          </DialogTrigger>
          <DialogContent className="p-0">
            <DialogHeader className="px-6 pb-4 pt-6">
              <Input
                type="search"
                placeholder="Search ID..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
              <DialogTitle className="mt-4 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-50">
                  Open requests
                </p>
                <p className="text-xs font-medium uppercase text-gray-700 dark:text-gray-300">
                  date
                </p>
              </DialogTitle>
            </DialogHeader>
            <div className="h-96 overflow-y-scroll px-6">
              {filteredItems.length > 0 ? (
                <ul
                  role="list"
                  className="divide-y divide-gray-200 text-sm text-gray-500 dark:divide-gray-800 dark:text-gray-500"
                >
                  {filteredItems.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between py-1.5"
                    >
                      <span>{item.name}</span>
                      <span className="tabular-nums">{item.issue}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="flex h-full items-center justify-center text-sm text-gray-900 dark:text-gray-50">
                  No results.
                </p>
              )}
            </div>
            <DialogFooter className="mt-4 border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-900 dark:bg-gray-950">
              <DialogClose asChild>
                <Button className="w-full" variant="secondary">
                  Go back
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
}

function StatusBadge({ status }: { status: string }) {
  let variant: "success" | "warning" | "primary" | "default" = "default";
  if (status === "Completed") variant = "success";
  else if (status === "In Progress") variant = "warning";
  else if (status === "Open") variant = "primary";
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
    variant === "success" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300" :
    variant === "warning" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300" :
    variant === "primary" ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300" :
    "bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
  }`}>{status}</span>;
} 