"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Admin() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/dashboard");
  }, [router]);

  return null;
}

export default Admin;
