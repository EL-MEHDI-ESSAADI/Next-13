import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <main>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </main>
  );
}

export default HomePage;
