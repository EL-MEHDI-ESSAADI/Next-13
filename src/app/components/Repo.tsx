import React from "react";
import Link from "next/link";
import {
  FaStar,
  FaCodeBranch,
  FaEye,
} from "react-icons/fa";
import { Repo } from "@/types";

async function fetchRepo(name: string) {
  const response = await fetch(
    `https://api.github.com/repos/EL-MEHDI-ESSAADI/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  await new Promise((resolve) =>
    setTimeout(resolve, 5000)
  ); // Wait 1 second

  const repo: Repo = await response.json();
  return repo;
}

async function Repo({ name }: { name: string }) {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
}

export default Repo;
