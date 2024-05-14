import React from 'react'
import EnrolledInfo from "../Components/EnrolledInfo.jsx"
import coursesData from '../../../Json-Server/ALEMENO_APP-Server/db.json';
const EnrolledCourses = () => {
  return (
    <>
    {coursesData.map((course) => (
      <EnrolledInfo key={course.id} courseId={course.id} />
    ))}
    </>
  )
}

export default EnrolledCourses