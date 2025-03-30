"use client";

import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "loading") {
      // Do nothing while loading
      return;
    }

    if (!session) {
      // If not authenticated, redirect to login page but save current path
      const returnUrl = encodeURIComponent(pathname);
      router.push(`/auth/signin?returnUrl=${returnUrl}`);
    }
  }, [session, status, router, pathname]);

  // Show loading indicator while checking authentication
  if (status === "loading") {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"></div>
      </div>
    );
  }

  // If user is authenticated, render children
  return session ? <>{children}</> : null;
}
