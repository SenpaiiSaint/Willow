'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const reviews = [
  {
    quote:
      "Willow made managing my two rental properties feel effortless. Everything's in one place — rent, leases, even maintenance requests. Total game changer.",
    name: "Jessica Lin",
    role: "Independent Landlord",
    avatar: "/profiles/jessica.png",
  },
  {
    quote:
      "I used to get overwhelmed juggling tenant emails and repairs. Since switching to Willow, I actually feel in control again.",
    name: "Mark Nguyen",
    role: "Property Owner",
    avatar: "/profiles/mark.jpg",
  },
  {
    quote:
      "As a tenant, I really appreciate how easy it is to pay rent and submit requests. I never have to chase anyone down. Willow just works.",
    name: "Nneka Patel",
    role: "Tenant",
    avatar: "/profiles/nneka.jpg",
  },
  {
    quote:
      "We manage 80+ units and needed something modern but simple. Willow gave our whole team visibility without adding complexity.",
    name: "Vanessa Cruz",
    role: "Property Manager",
    avatar: "/profiles/vanessa.jpg",
  },
  {
    quote:
      "I was skeptical at first, but Willow impressed me fast. Set-up was quick, and the interface is super clean. Even my accountant loves it.",
    name: "Sarah Reed",
    role: "Real Estate Investor",
    avatar: "/profiles/sarah.jpg",
  },
  {
    quote:
      "Our renters constantly tell us how easy Willow is to use. It's made us look way more professional and responsive.",
    name: "Lauren Mitchell",
    role: "Leasing Coordinator",
    avatar: "/profiles/lauren.jpg",
  },
  {
    quote:
      "Before Willow, we were buried in spreadsheets. Now we get real-time insights and automated reminders — no more missed deadlines.",
    name: "Daniel Kim",
    role: "Operations Lead",
    avatar: "/profiles/daniel.jpg",
  },
  {
    quote:
      "Honestly? I never thought software would help me *enjoy* being a landlord. Willow's made a huge difference.",
    name: "Nina Brooks",
    role: "Landlord",
    avatar: "/profiles/nina.jpg",
  },
  {
    quote:
      "The customer support has been amazing. Anytime I had a question, someone actually helped me — fast.",
    name: "Jose Ramirez",
    role: "Owner-Operator",
    avatar: "/profiles/jose.jpg",
  },
  {
    quote:
      "My favorite thing about Willow is how intuitive it is. I didn't need a manual — I just signed up and started managing my duplex right away.",
    name: "Haley Saunders",
    role: "First-Time Property Owner",
    avatar: "/profiles/haley.jpg",
  },
];

export default function SignInPage() {
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
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Login form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-4 py-8 sm:px-8 md:px-16 md:py-12 min-h-screen md:min-h-0">
        <div className="max-w-md mx-auto w-full">
          <div className="mb-8 flex justify-center">
            <div className="relative w-32 h-16 sm:w-40 sm:h-20 md:w-56 md:h-24 lg:w-64 lg:h-28">
              <Image
                src="/logos/logo5.png"
                alt="Homvana"
                fill
                style={{ objectFit: 'contain' }}
                priority
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 224px, 256px"
              />
            </div>
          </div>
          <h1 className="text-gray-900 text-3xl font-semibold mb-2">Welcome back</h1>
          <p className="text-gray-600 mb-8">Sign in to your account</p>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 mb-3 rounded-md border border-gray-300 bg-transparent py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
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

          {/* Google OAuth Button */}
          <button
            type="button"
            onClick={() => signIn('google', { redirectTo: '/directive' })}
            className="w-full flex items-center justify-center gap-2 mb-3 rounded-md border border-gray-300 bg-white py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
            // TODO: Google OAuth handler
          >
            {/* Google icon */}
            <svg className="h-5 w-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_17_40)">
                <path d="M47.532 24.552c0-1.636-.146-3.192-.418-4.668H24.48v8.844h12.98c-.56 3.016-2.24 5.572-4.78 7.292v6.04h7.74c4.54-4.184 7.112-10.348 7.112-17.508z" fill="#4285F4"/>
                <path d="M24.48 48c6.48 0 11.924-2.148 15.896-5.84l-7.74-6.04c-2.148 1.44-4.892 2.292-8.156 2.292-6.272 0-11.584-4.232-13.492-9.936H2.48v6.24C6.44 43.36 14.56 48 24.48 48z" fill="#34A853"/>
                <path d="M10.988 28.476A14.98 14.98 0 0 1 9.48 24c0-1.552.268-3.056.748-4.476v-6.24H2.48A23.98 23.98 0 0 0 .48 24c0 3.944.94 7.684 2.6 10.956l7.908-6.48z" fill="#FBBC05"/>
                <path d="M24.48 9.54c3.528 0 6.668 1.216 9.156 3.6l6.844-6.844C36.4 2.148 30.96 0 24.48 0 14.56 0 6.44 4.64 2.48 13.284l7.748 6.24c1.908-5.704 7.22-9.984 13.492-9.984z" fill="#EA4335"/>
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </button>

          <div className="relative mb-4 mt-5 flex items-center text-gray-400 text-xs sm:text-sm">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-3">or</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="email" className="mb-1 block text-xs font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mb-4 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholder="you@example.com"
            />

            <label htmlFor="password" className="mb-1 block text-xs font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mb-4 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
              placeholder="••••••••"
            />

            <div className="flex justify-between text-xs text-gray-400 mb-6">
              <div />
              <Link href="#" className="hover:underline">
                Forgot Password?
              </Link>
            </div>

            {error && (
              <div className="mb-4 rounded bg-red-100 p-3 text-center text-sm text-red-600">{error}</div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded bg-green-600 py-3 text-base sm:text-sm font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50 mt-2"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="mt-6 text-center text-xs sm:text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-semibold text-sky-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Random Review */}
      <div className="hidden w-1/2 flex-col items-center justify-center bg-gray-100 px-16 py-12 text-gray-800 md:flex">
        {selectedReview ? (
          <>
            <blockquote className="relative max-w-lg text-xl font-semibold before:absolute before:-left-4 before:top-0 before:text-6xl before:text-gray-300">
              {selectedReview?.quote}
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <Image
                  src={selectedReview?.avatar || ''}
                  alt={selectedReview?.name || ''}
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{selectedReview?.name}</p>
                {selectedReview?.role && (
                  <p className="text-xs text-gray-500">{selectedReview.role}</p>
                )}
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
