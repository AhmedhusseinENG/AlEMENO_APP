import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "./State/courseSlice"; // Assuming correct path

function EnrolledInfo({ courseId }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const course = courses.find((c) => c.id === courseId); // Find the specific course
  const [isCompleted, setIsCompleted] = useState(false); // Track completion status
  const [isUndoVisible, setIsUndoVisible] = useState(false); // Track "Undo" visibility

  useEffect(() => {
    dispatch(fetchCourses()); // Fetch courses on component mount (or when courseId changes)
  }, [dispatch, courseId]);

  if (!course) {
    return <p>Loading course information...</p>;
  }

  const handleMarkComplete = () => {
    setIsCompleted((prevCompleted) => !prevCompleted);
    setIsUndoVisible(prevVisible => !prevVisible); // Toggle "Undo" visibility on state change
  };

  return (
    <div
      className={`enrolled-info relative ${
        isCompleted ? "bg-gray-200 opacity-75" : ""
      }`}
    >
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <ul>
        <li>ID: {course.id}</li>
        <li>
          Progress:{" "}
          <ProgressBar now={Math.floor(course.progress * 100)} label={`${Math.floor(course.progress * 100)}%`} />
        </li>
        <li>Due Date: {course.dueDate}</li>
      </ul>
      <button
        onClick={handleMarkComplete}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-md text-xl font-bold overflow-hidden ${
          isCompleted ? "text-green-500 bg-white" : "text-white bg-blue-500"
        }`}
      >
        <span className="text-center block transition duration-300 ease-in-out transform">
          {isCompleted ? "Done" : ""}
          <span
            className={`absolute top-0 left-0 w-full h-full bg-gray-200 opacity-0 transition duration-300 ease-in-out transform ${
              isCompleted ? "opacity-100" : ""
            }`}
          >
            <span className="text-green-500 text-center text-2xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {isUndoVisible ? "Undo" : ""}
            </span>
          </span>
        </span>
      </button>
      {/* Additional information or actions specific to enrolled users */}
    </div>
  );
}

export default EnrolledInfo;
