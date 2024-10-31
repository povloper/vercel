"use client";

import { useParams } from "next/navigation";

export default function SubdomainHome() {

    const params = useParams();
    const tenant = params.subdomain;
    console.log(tenant)

    return (
      <div className="justify-center w-100 h-100">
        <p className="justify-center">test2</p>
      </div>
    );
  }
  