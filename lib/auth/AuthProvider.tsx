"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "./getToken";

const IsAuth = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    isAuthenticated(router);
  }, [router]);
  return <>{children}</>;
};

export { IsAuth };
