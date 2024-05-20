import NavbarComponent from "../../components/Navbarcomponent/navbar";
import Footer from "../../components/Footercomponent/footer";
import { Layout, Button } from "antd";
import React, { useState, useEffect } from 'react';
import "./lesson.scss";

const Lesson = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/backendelearning/service/lesson') // replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        if (data.status === 1) {
          console.log("ma na");
          setLessons(data.lesson);
          console.log("ma nee",data.lesson);
        } else {
          console.error('Error fetching lessons:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <>
      <NavbarComponent />
      <div className="main-lesson">
        <h2>รายวิชา</h2>
        <div className="row mt-4" style={{ height: "100vh" }}>
          {lessons.map(lesson => (
            <div key={lesson.lesID} className="col-xl-3 d-flex justify-content-center">
              <Button
                style={{
                  width: "100%",
                  height: "15rem",
                  maxWidth: "25rem",
                  minWidth: "10rem",
                }}
              >
                {lesson.lesName}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Lesson;
