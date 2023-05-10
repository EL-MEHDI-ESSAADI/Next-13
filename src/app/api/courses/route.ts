import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import courses from "./data.json";

export async function GET(request: NextRequest) {
  return NextResponse.json(courses);
}

export async function POST(request: NextRequest) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: uuidv4(),
    title,
    description,
    link,
    level,
  };

  courses.push(newCourse as any);

  return NextResponse.json(courses);
}
