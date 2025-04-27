'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  UserCircleIcon,
  PencilIcon,
  CheckIcon,
  XMarkIcon,
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  GlobeAltIcon,
  ClockIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

interface Profile {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  address: string | null;
  bio: string | null;
  preferences: {
    language: string;
    timezone: string;
  };
  personal: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  security: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  documents: {
    idProof: string;
    leaseAgreement: string;
    otherDocuments: string[];
  };
}

// Mock profile data
const mockProfile: Profile = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  address: '123 Main St, Anytown, USA',
  bio: 'Property manager with 5 years of experience',
  preferences: {
    language: 'en',
    timezone: 'EST',
  },
  personal: {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA',
  },
  security: {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  },
  documents: {
    idProof: '',
    leaseAgreement: '',
    otherDocuments: [],
  },
};

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile>(mockProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Profile>(mockProfile);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/profile');
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.') as [keyof Profile, string];
    
    setProfile(prev => ({
      ...prev,
      [section]: {
        ...(prev[section] as { [key: string]: string | string[] }),
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) throw new Error('Failed to update profile');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                <UserCircleIcon className="h-12 w-12 text-gray-400" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                    />
                  ) : (
                    profile.name
                  )}
                </h1>
                <p className="text-sm text-gray-500">
                  {isEditing ? (
                    <input
                      type="text"
                      name="bio"
                      value={formData.bio || ''}
                      onChange={handleInputChange}
                      className="border-b border-gray-300 focus:border-blue-500 focus:outline-none"
                      placeholder="Add a bio"
                    />
                  ) : (
                    profile.bio || 'No bio added yet'
                  )}
                </p>
              </div>
            </div>
            <div className="flex space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSubmit}
                    className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200"
                  >
                    <CheckIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setFormData(profile);
                    }}
                    className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200"
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="personal.email"
                    value={formData.personal.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.personal.email}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="personal.phone"
                    value={formData.personal.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <PhoneIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.personal.phone || 'No phone number'}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="personal.address"
                    value={formData.personal.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <HomeIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.personal.address || 'No address'}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Preferences</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                {isEditing ? (
                  <select
                    name="preferences.language"
                    value={formData.preferences.language}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </select>
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.preferences.language === 'en' ? 'English' : 
                     profile.preferences.language === 'es' ? 'Spanish' : 'French'}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Timezone</label>
                {isEditing ? (
                  <select
                    name="preferences.timezone"
                    value={formData.preferences.timezone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="UTC">UTC</option>
                    <option value="EST">Eastern Time</option>
                    <option value="PST">Pacific Time</option>
                  </select>
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.preferences.timezone}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Security</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Password</label>
                {isEditing ? (
                  <input
                    type="password"
                    name="security.currentPassword"
                    value={formData.security.currentPassword}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.security.currentPassword}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">New Password</label>
                {isEditing ? (
                  <input
                    type="password"
                    name="security.newPassword"
                    value={formData.security.newPassword}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.security.newPassword}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                {isEditing ? (
                  <input
                    type="password"
                    name="security.confirmPassword"
                    value={formData.security.confirmPassword}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <ShieldCheckIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.security.confirmPassword}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Documents</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ID Proof</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="documents.idProof"
                    value={formData.documents.idProof}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.documents.idProof}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Lease Agreement</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="documents.leaseAgreement"
                    value={formData.documents.leaseAgreement}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <div className="mt-1 flex items-center text-sm text-gray-900">
                    <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                    {profile.documents.leaseAgreement}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 