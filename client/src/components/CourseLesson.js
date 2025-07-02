import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CourseLesson.css";

const CourseLesson = () => {
  const { courseId } = useParams();
  const [lessons, setLessons] = useState([]);
  const [activeLessonId, setActiveLessonId] = useState(null);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [currentVideoTitle, setCurrentVideoTitle] = useState("");
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const token = localStorage.getItem("access");

  useEffect(() => {
    // Mark course as active
    axios.post(
      "http://127.0.0.1:8000/api/mark-active/",
      { course_id: courseId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    // Fetch lessons and videos
    axios
      .get(`http://127.0.0.1:8000/api/courses/${courseId}/lessons/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setLessons(res.data))
      .catch((err) => console.error("❌ Failed to fetch lessons:", err));
  }, [courseId, token]);

  const toggleLesson = (lessonId) => {
    setActiveLessonId((prev) => (prev === lessonId ? null : lessonId));
  };

  const handleVideoEnd = (videoId) => {
    axios
      .post(
        "http://127.0.0.1:8000/api/lesson-progress/",
        {
          course_id: courseId,
          video_id: videoId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        setLessons((prevLessons) =>
          prevLessons.map((lesson) => ({
            ...lesson,
            videos: lesson.videos.map((video) =>
              video.id === videoId ? { ...video, is_watched: true } : video
            ),
          }))
        );
      })
      .catch((error) => {
        console.error("❌ Failed to update lesson progress:", error);
      });
  };

  const playVideo = (video) => {
    setCurrentVideoId(video.id);
    setCurrentVideoTitle(video.video_title);

    if (video.video_file) {
      const fullUrl = `http://127.0.0.1:8000${video.video_file}`;
      setCurrentVideoUrl(fullUrl);
    } else {
      console.error("No video file found for this lesson.");
      setCurrentVideoUrl("");
    }
  };

  return (
    <div className="lesson-container">
      <div className="lesson-sidebar">
        <h2 className="sidebar-heading">📚 Course Lessons</h2>
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className={`lesson-block ${
              activeLessonId === lesson.id ? "active" : ""
            }`}
          >
            <div
              className="lesson-title"
              onClick={() => toggleLesson(lesson.id)}
            >
              Lesson #{lesson.lesson_order} - {lesson.lesson_title}
            </div>
            {activeLessonId === lesson.id && (
              <div className="video-list">
                {lesson.videos.map((video) => (
                  <div key={video.id} className="video-item">
                    <span className="video-title">
                      {video.video_title}
                      {video.is_watched && (
                        <span className="completed-badge">✅ Completed</span>
                      )}
                    </span>
                    <button
                      className="preview-button"
                      onClick={() => playVideo(video)}
                    >
                      ▶ Watch
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="lesson-player">
        <h3 className="video-heading">{currentVideoTitle}</h3>
        {currentVideoUrl && (
          <div style={{ width: "100%", maxWidth: "720px" }}>
            <video
              key={currentVideoUrl}
              controls
              preload="metadata"
              onEnded={() => handleVideoEnd(currentVideoId)}
              style={{
                width: "100%",
                backgroundColor: "#000",
                borderRadius: "10px",
              }}
            >
              <source src={currentVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseLesson;
