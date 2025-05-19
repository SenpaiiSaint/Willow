'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const reviews = [
  {
    quote: 'Homvana makes property management effortless. I can focus on my tenants and growth, not paperwork.',
    name: 'Alex',
    role: 'Property Manager',
    avatar: '/images/profiles/alex.jpg',
  },
  {
    quote: 'Managing properties has never been easier. Homvana lets me focus on what matters—growing my business and keeping tenants happy.',
    name: 'Jordan',
    role: 'Property Owner',
    avatar: '/images/profiles/jordan.jpg',
  },
  {
    quote: 'Paying rent and submitting requests is so easy now. I love how simple everything is!',
    name: 'Taylor',
    role: 'Tenant',
    avatar: '/images/profiles/taylor.jpg',
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const [selectedReview, setSelectedReview] = useState<typeof reviews[0] | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setSelectedReview(reviews[randomIndex]);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString().trim() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    if (!email || !password) {
      setError('Please provide both email and password.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text.substring(0, 100)}...`);
      }

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Login failed');
      }

      localStorage.setItem('user', JSON.stringify(result.user));
      router.push('/dashboard');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Login form */}
      <div className="w-1/2 bg-[#121212] flex flex-col justify-center px-16 py-12">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-10">
            {/* Replace with your logo */}
            <Image src="/logo.svg" alt="Homvana" width={120} height={40} priority />
          </div>
          <h1 className="text-white text-3xl font-semibold mb-2">Welcome back</h1>
          <p className="text-gray-400 mb-8">Sign in to your account</p>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 mb-3 rounded-md border border-gray-700 bg-transparent py-3 text-sm font-medium text-gray-300 hover:bg-gray-800"
            // TODO: Social login handler
          >
            {/* GitHub icon */}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.09.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.455-1.154-1.11-1.462-1.11-1.462-.909-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.942 0-1.09.39-1.982 1.029-2.68-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026a9.564 9.564 0 012.5-.336c.848.004 1.703.115 2.5.336 1.909-1.295 2.748-1.026 2.748-1.026.546 1.377.202 2.394.1 2.647.64.698 1.028 1.59 1.028 2.68 0 3.842-2.337 4.686-4.566 4.934.359.31.678.92.678 1.855 0 1.338-.012 2.419-.012 2.75 0 .268.18.577.688.479A10.013 10.013 0 0022 12z" />
            </svg>
            Continue with GitHub
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 mb-6 rounded-md border border-gray-700 bg-transparent py-3 text-sm font-medium text-gray-300 hover:bg-gray-800"
            // TODO: Social login handler
          >
            {/* SSO Icon */}
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
            </svg>
            Continue with SSO
          </button>

          <div className="relative mb-6 flex items-center text-gray-400">
            <div className="flex-grow border-t border-gray-700"></div>
            <span className="mx-3 text-xs">or</span>
            <div className="flex-grow border-t border-gray-700"></div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="email" className="mb-1 block text-xs font-medium text-gray-400">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mb-4 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-white placeholder-gray-500 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholder="you@example.com"
            />

            <label htmlFor="password" className="mb-1 block text-xs font-medium text-gray-400">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mb-4 w-full rounded-md border border-gray-700 bg-transparent px-3 py-2 text-white placeholder-gray-500 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholder="••••••••"
            />

            <div className="flex justify-between text-xs text-gray-400 mb-6">
              <div />
              <Link href="#" className="hover:underline">
                Forgot Password?
              </Link>
            </div>

            {error && (
              <div className="mb-4 rounded bg-red-900/30 p-3 text-center text-sm text-red-500">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-green-600 py-3 text-sm font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-white hover:underline">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Random Review */}
      <div className="hidden w-1/2 flex-col items-center justify-center bg-black px-16 py-12 text-white md:flex">
        {selectedReview ? (
          <>
            <blockquote className="relative max-w-lg text-xl font-semibold before:absolute before:-left-4 before:top-0 before:text-6xl before:text-gray-700 before:content-['“']">
              {selectedReview.quote}
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                <Image
                  src={selectedReview.avatar}
                  alt={selectedReview.name}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{selectedReview.name}</p>
                <p className="text-xs text-gray-400">{selectedReview.role}</p>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
