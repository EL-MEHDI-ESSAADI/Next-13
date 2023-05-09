import Repo from "@/app/components/Repo";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import { Suspense } from "react";

function RepoPage({ params }: Params) {
  const { name } = params;
  return (
    <div className="card">
      <div>No loading here</div>
      <Suspense fallback={<div>loading ...</div>}>
        <Repo name={name} />
      </Suspense>
    </div>
  );
}

export default RepoPage;
