"use client";
import Courses from "@/components/Courses";
import Link from "next/link";
import React, { use, useEffect } from "react";
import Loading from "./loading";
import { CoursesType } from "@/types";
import CourseSearch from "@/components/CourseSearch";

function HomePage() {
  const [courses, setCourses] = React.useState<CoursesType>([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    };

    getCourses();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <h1>Welcome to Traversy media</h1>
      <CourseSearch setCourses={setCourses} />
      <Courses courses={courses} />
    </>
  );
}

export default HomePage;
