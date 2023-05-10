import React from "react";
import { Dirs } from "@/types";
import Link from "next/link";

async function fetchRepoContents(name: string) {
  const response = await fetch(`https://api.github.com/repos/EL-MEHDI-ESSAADI/${name}/contents`);
  const contents: Dirs = await response.json();

  await new Promise((resolve) => setTimeout(resolve, 3000));

  return contents;
}

async function RepoDirs({ name }: { name: string }) {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RepoDirs;
