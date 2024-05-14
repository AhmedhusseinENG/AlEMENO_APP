import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "./State/courseSlice"; // Assuming correct path

function BasicInfo({ courseId }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const course = courses.find((c) => c.id === courseId); // Find the specific course
  const [likes, setLikes] = useState(course?.likes || 0); // Initialize likes with default or fetched value

  useEffect(() => {
    dispatch(fetchCourses()); // Fetch courses on component mount (or when courseId changes)
  }, [dispatch, courseId]);

  const handleLikeClick = async () => {
    try {
      const response = await fetch(`http://localhost:3000/Courses/${courseId}/like`, {
        method: "PATCH", // Update the like count
        body: JSON.stringify({ likes: likes + 1 }), // Send updated likes in request body
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Failed to update likes");
      }

      const updatedCourse = await response.json();
      setLikes(updatedCourse.likes); // Update local state with new likes count
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  };

  if (!course) {
    return <p>Loading course information...</p>;
  }

  return (
    <div className="basic-info">
      <img src={course.thumbnail} alt={course.name} /> {/* Access thumbnail */}
      <h2>{course.name}</h2> {/* Access name */}
      <p>{course.description}</p> {/* Access description */}
      <ul>
        <li>Instructor: {course.instructor}</li> {/* Access instructor */}
        <li>Likes: {likes}</li> {/* Display likes count */}
        <li>ID: {course.id}</li> {/* Access id */}
        <li>
          <button onClick={handleLikeClick}>Like</button>
        </li>
      </ul>
    </div>
  );
}

export default BasicInfo;
