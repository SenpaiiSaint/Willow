import { Suspense } from 'react';
import TenantDetailsClient from './TenantDetailsClient';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TenantDetailsPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    }>
      <TenantDetailsClient tenantId={id} />
    </Suspense>
  );
}
