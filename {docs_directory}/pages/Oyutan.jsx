import { useState } from "react";
import "./Oyutan.css";

function Student() {
  const [studentCount, setStudentCount] = useState(0);

  // Оюутны тоог нэмэх
  const addStudent = () => {
    setStudentCount((count) => count + 1);
  };

  // Оюутны тоог хасах
  const removeStudent = () => {
    setStudentCount((count) => (count > 0 ? count - 1 : 0));
  };

  // Бүх оюутны тоог тэглэх
  const resetCount = () => {
    setStudentCount(0);
  };

  return (
    <main className="student-page">
      <section className="student-header">
        <span className="student-label">ХААИС - ОЮУТНЫ СИСТЕМ</span>

        <h1>Оюутны мэдээлэл</h1>

        <p>Хичээлд бүртгүүлсэн оюутны тоог удирдах хэсэг</p>
      </section>

      <section className="student-card">
        <div className="student-icon"></div>

        <h2>Оюутны бүртгэл</h2>

        <p className="student-description">Бүртгүүлсэн оюутны нийт тоо</p>

        <div className="student-count">{studentCount}</div>

        <p className="student-status">
          {studentCount === 0 ? "Одоогоор оюутан бүртгэгдээгүй байна." : `Нийт ${studentCount} оюутан бүртгэгдсэн байна.`}
        </p>

        <div className="student-actions">
          <button className="student-btn add-btn" onClick={addStudent}>
            + Оюутан нэмэх
          </button>

          <button className="student-btn remove-btn" onClick={removeStudent} disabled={studentCount === 0}>
            ➖ Оюутан хасах
          </button>
        </div>

        <button className="reset-btn" onClick={resetCount} disabled={studentCount === 0}>
          Тоог тэглэх
        </button>
      </section>

      <footer className="student-footer">© 2026 Хөдөө аж ахуйн их сургууль</footer>
    </main>
  );
}

export default Student;
