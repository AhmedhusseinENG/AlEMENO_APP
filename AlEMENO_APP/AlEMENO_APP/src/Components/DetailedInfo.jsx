import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "./State/courseSlice"; // Assuming correct path

function DetailedInfo({ courseId }) {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const course = courses.find((c) => c.id === courseId); // Find the specific course

  const [showFullSyllabus, setShowFullSyllabus] = useState(false);
  const [visibleWeeks, setVisibleWeeks] = useState(1); // Initially show only the first week

  useEffect(() => {
    dispatch(fetchCourses()); // Fetch courses on component mount (or when courseId changes)
  }, [dispatch, courseId]);

  if (!course) {
    return <p>Loading course information...</p>;
  }

  const handleShowMore = () => {
    setVisibleWeeks((prevWeeks) => Math.min(prevWeeks + 1, course.syllabus.length)); // Limit to syllabus length
  };

  return (
    <div className="detailed-info">
      <h2>{course.name}</h2>
      <p>{course.description}</p>
      <ul>
        <li>Instructor: {course.instructor}</li>
        <li>Likes: {course.likes}</li>
        <li>ID: {course.id}</li>
        <li>Enrollment Status: {course.enrollmentStatus}</li>
        <li>Duration: {course.duration}</li>
        <li>Schedule: {course.schedule}</li>
        <li>Location: {course.location}</li>
      </ul>
      <h3>Prerequisites</h3>
      <ul>
        {course.prerequisites?.map((prequisite) => (
          <li key={prequisite}>{prequisite}</li>
        ))}
      </ul>

      <h3>Syllabus</h3>
      {visibleWeeks < course.syllabus.length && (
        <button onClick={handleShowMore}>
          Show More {visibleWeeks === 1 ? "Syllabus" : `${visibleWeeks} Weeks`}
        </button>
      )}
      {course.syllabus.slice(0, visibleWeeks).map((week, index) => (
        <div key={index}>
          <h4>
            Week {index + 1}: {week.topic}
          </h4>
          <p>
            {Object.entries(week).map(([key, value]) => (
              <span key={key}>
                {key}: {value}
                <br />
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DetailedInfo;
