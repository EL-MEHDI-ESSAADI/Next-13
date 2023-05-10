import Repo from "@/components/Repo";
import RepoDirs from "@/components/RepoDirs";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import React from "react";
import { Suspense } from "react";

function RepoPage({ params }: Params) {
  const { name } = params;
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading Repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading Directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
