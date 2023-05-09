import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </main>
  );
}

export default HomePage;
