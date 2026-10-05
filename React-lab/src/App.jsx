// App.css файлыг React компонентод холбоно
import "./App.css";

// Бүрэлдэхүүн хэсгүүдийг (Components) оруулж байна
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer"; // Footer импорт хийсэн

// ҮНДСЭН APP КОМПОНЕНТ
function App() {
  // ВЭБ ХУУДАСНЫ ҮНДСЭН ХЭСЭГ
  return (
    <div className="website">
      {/* HEADER - ВЭБИЙН ДЭЭД ХЭСЭГ */}
      <Header />

      {/* NAVIGATION - ҮНДСЭН ЦЭС */}
      <Navbar />

      {/* MAIN - ВЭБИЙН ҮНДСЭН АГУУЛГА */}
      <main>
        {/* HERO - НҮҮР ХУУДАСНЫ ТОМ ХЭСЭГ */}
        <section className="hero">
          <div className="hero-content">
            <h2>ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ</h2>
            <p>Мэдлэг, шинжлэх ухаан, инновацид суурилсан дээд боловсролын байгууллага</p>
            <button>Дэлгэрэнгүй</button>
          </div>
        </section>

        {/* ЧУХАЛ ХОЛБООС */}
        <section className="important">
          {/* ЧУХАЛ ХОЛБООСЫН ЗҮҮН ТАЛЫН ЗУРАГ */}
          <div className="important-image">
            <img src="/medee.jpg" alt="ХААИС-ийн зураг" />
          </div>

          {/* ЧУХАЛ ХОЛБООСЫН БАРУУН ТАЛ */}
          <div className="important-content">
            <h2>ЧУХАЛ ХОЛБООС</h2>

            <div className="link-cards">
              {/* 1. Шилэн данс */}
              <a href="https://shilendans.gov.mn/organization/30156?ry=2026&group=5" target="_blank" rel="noreferrer">
                <span className="link-icon">▣</span>
                <span>Шилэн данс</span>
              </a>

              {/* 2. Санхүү бүртгэлийн програм */}
              <a href="https://www1.unicus.mn/nar/" target="_blank" rel="noreferrer">
                <span className="link-icon">box</span>
                <span>Санхүү бүртгэлийн програм</span>
              </a>

              {/* 3. Сургалтын албаны вэб */}
              <a href="https://lms.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">▣</span>
                <span>Сургалтын албаны вэб</span>
              </a>

              {/* 4. Багшийн вэб */}
              <a href="https://teacher.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">♟</span>
                <span>Багшийн вэб</span>
              </a>

              {/* 5. Багшийн хөгжил програм */}
              <a href="https://lce.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">★</span>
                <span>Багшийн хөгжил програм</span>
              </a>

              {/* 6. Оюутны вэб */}
              <a href="https://student.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">♟</span>
                <span>Оюутны вэб</span>
              </a>

              {/* 7. Элсэлтийн вэб */}
              <a href="https://elselt.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">✏</span>
                <span>Элсэлтийн вэб</span>
              </a>

              {/* 8. Оюутны төлбөрийн мэдээлэл */}
              <a href="https://finance.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">₮</span>
                <span>Оюутны төлбөрийн мэдээлэл</span>
              </a>

              {/* 9. Электрон шуудан */}
              <a href="https://mail.google.com/a/muls.edu.mn" target="_blank" rel="noreferrer">
                <span className="link-icon">✉</span>
                <span>Электрон шуудан</span>
              </a>

              {/* 10. Номын сан вэб */}
              <a href="https://library.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">📖</span>
                <span>Номын сан вэб</span>
              </a>

              {/* 11. Номын сангийн электрон каталог */}
              <a href="http://catalog.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">ρ</span>
                <span>Номын сангийн электрон каталог</span>
              </a>

              {/* 12. Төв байр план зураг */}
              <a href="http://map.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">❖</span>
                <span>Төв байр план зураг</span>
              </a>

              {/* 13. Санал хүсэлт илгээх */}
              <a href="https://sites.google.com/muls.edu.mn/feedback-muls-edu-mn/home" target="_blank" rel="noreferrer">
                <span className="link-icon">☑</span>
                <span>Санал хүсэлт илгээх</span>
              </a>

              {/* 14. ХААИС-ийн үндсэн вэб */}
              <a href="https://www.muls.edu.mn/" target="_blank" rel="noreferrer">
                <span className="link-icon">⌂</span>
                <span>ХААИС-ийн үндсэн вэб</span>
              </a>
            </div>
          </div>
        </section>

        {/* NEWS - СҮҮЛИЙН МЭДЭЭ */}
        <section className="news">
          <h2>СҮҮЛИЙН МЭДЭЭ</h2>

          <div className="news-list">
            <NewsCard
              title="ХААИС-ийн шинэ мэдээлэл"
              description="Хөдөө аж ахуйн их сургуулийн үйл ажиллагаа, шинэ мэдээ мэдээлэл."
              date="2026.09.06"
            />

            <NewsCard
              title="Сургалт, эрдэм шинжилгээний үйл ажиллагаа"
              description="Сургалт болон эрдэм шинжилгээний үйл ажиллагааны талаарх мэдээлэл."
              date="2026.09.05"
            />

            <NewsCard
              title="Оюутны үйл ажиллагаа"
              description="Оюутнуудад зориулсан үйл ажиллагаа, арга хэмжээний мэдээлэл."
              date="2026.09.04"
            />
          </div>
        </section>
      </main>

      {/* FOOTER - ВЭБИЙН ДООД ХЭСЭГ */}
      <Footer />

      {/* COPYRIGHT */}
      <div className="copyright">© 2026 Хөдөө аж ахуйн их сургууль</div>
    </div>
  );
}

// АПП КОМПОНЕНТЫГ ЭКСПОРТ ХИЙНЭ
export default App;
