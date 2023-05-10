import { CoursesType } from "@/types";
import React from "react";

function CourseSearch({ setCourses }: { setCourses: (courses: CoursesType) => void }) {
  const [query, setQuery] = React.useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);

    if (res.status !== 200) throw new Error("Failed to fetch courses");

    const courses: CoursesType = await res.json();

    setQuery("");
    setCourses(courses);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Search Courses..."
        value={query}
        onChange={handleChange}
      />
      <button className="search-button"> Search</button>
    </form>
  );
}

export default CourseSearch;
