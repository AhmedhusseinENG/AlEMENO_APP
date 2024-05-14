
import BasicInfo from "../Components/BasicInfo";
import React from 'react';
import coursesData from '../../../Json-Server/ALEMENO_APP-Server/db.json';
const Index = () => {
  return (
    <>
    {coursesData.map((course) => (
      <BasicInfo key={course.id} courseId={course.id} />
    ))}
    </>
  )
};

export default Index;