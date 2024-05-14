import React from 'react'
import DetailedInfo from "../Components/DetailedInfo.jsx";
import coursesData from '../../../Json-Server/ALEMENO_APP-Server/db.json';
const MyCourses = () => {
  return (
    <>
    {coursesData.map((course) => (
      <DetailedInfo key={course.id} courseId={course.id} />
    ))}
    </>
  )
}

export default MyCourses