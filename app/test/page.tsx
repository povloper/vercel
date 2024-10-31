"use client";

import { useParams } from "next/navigation";

export default function SubdomainHome() {

    const params = useParams();
    const tenant = params.subdomain;
    console.log(tenant)

    return (
      <p>test</p>
    );
  }
  