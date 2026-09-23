// App.css файлыг React компонентод холбоно
import "./App.css";

// ҮНДСЭН АРР КОМПОНЕНТ
function App() {
  // Их сургуулийн монгол нэр
  const universityName = "ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ";

  // Их сургуулийн англи нэр
  const englishName = "MONGOLIAN UNIVERSITY OF LIFE SCIENCES";

  // ВЭБ ХУУДАСНЫ ҮНДСЭН ХЭСЭГ
  return (
    <div className="website">
      {/* HEADER - ВЭБИЙН ДЭЭД ХЭСЭГ */}
      <header className="header">
        {/* Лого болон сургуулийн нэр */}
        <div className="logo-section">
          {/* ХААИС-ийн лого */}
          <img src="/logo_muls.png" alt="ХААИС лого" className="muls-logo" />

          {/* Их сургуулийн нэр */}
          <div className="university-title">
            {/* Монгол нэр */}
            <h1>{universityName}</h1>
            {/* Англи нэр */}
            <p>{englishName}</p>
          </div>
        </div>

        {/* HEADER-ИЙН БАРУУН ТАЛЫН ЦЭС */}
        <div className="top-links">
          {/* Элсэлтийн бүртгэл */}
          <a href="#">ЭЛСЭЛТИЙН БҮРТГЭЛ</a>
          {/* Бүтэц бүрэлдэхүүн */}
          <a href="#">БҮТЭЦ БҮРЭЛДЭХҮҮН</a>
          {/* Төгсөгчид */}
          <a href="#">ТӨГСӨГЧИД</a>
        </div>
      </header>

      {/* NAVIGATION - ҮНДСЭН ЦЭС */}
      <nav className="navbar">
        <a href="#">НҮҮР</a>
        <a href="#">ХААИС</a>
        <a href="#">УДИРДАХ ЗӨВЛӨЛ</a>
        <a href="#">СУРГАЛТ</a>
        <a href="#">ЭРДЭМ ШИНЖИЛГЭЭ, ИННОВАЦ</a>
        <a href="#">ХӨГЖЛИЙН БОДЛОГО</a>
        <a href="#">ХАМТЫН АЖИЛЛАГАА</a>
        <a href="#">ОЮУТАН</a>
        <a href="#">РЕКТОРЫН АЖЛЫН АЛБА</a>
        <a href="#">ХОЛБОО БАРИХ</a>
      </nav>

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
            {/* 1-р мэдээ */}
            <article className="news-card">
              <div className="news-image">МЭДЭЭ</div>
              <div className="news-content">
                <h3>ХААИС-ийн шинэ мэдээлэл</h3>
                <p>Хөдөө аж ахуйн их сургуулийн үйл ажиллагаа, шинэ мэдээ мэдээлэл.</p>
                <span>2026.09.06</span>
              </div>
            </article>

            {/* 2-р мэдээ */}
            <article className="news-card">
              <div className="news-image">МЭДЭЭ</div>
              <div className="news-content">
                <h3>Сургалт, эрдэм шинжилгээний үйл ажиллагаа</h3>
                <p>Сургалт болон эрдэм шинжилгээний үйл ажиллагааны талаарх мэдээлэл.</p>
                <span>2026.09.05</span>
              </div>
            </article>

            {/* 3-р мэдээ */}
            <article className="news-card">
              <div className="news-image">МЭДЭЭ</div>
              <div className="news-content">
                <h3>Оюутны үйл ажиллагаа</h3>
                <p>Оюутнуудад зориулсан үйл ажиллагаа, арга хэмжээний мэдээлэл.</p>
                <span>2026.09.04</span>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* FOOTER - ВЭБИЙН ДООД ХЭСЭГ */}
      <footer className="footer">
        {/* ХААИС-ийн тухай */}
        <div className="footer-column">
          <h2>ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ</h2>
          <p>Мэдлэг, шинжлэх ухаан, инновацид суурилсан дээд боловсролын байгууллага.</p>
        </div>

        {/* БҮРЭЛДЭХҮҮН СУРГУУЛЬ */}
        <div className="footer-column">
          <h3>БҮРЭЛДЭХҮҮН СУРГУУЛЬ</h3>
          <ul>
            <li>Мал эмнэлгийн сургууль</li>
            <li>Мал аж ахуй, Биотехнологийн сургууль</li>
            <li>Инженер технологийн сургууль</li>
            <li>Агроэкологийн сургууль</li>
            <li>Эдийн засаг бизнесийн сургууль</li>
            <li>Хэрэглээний шинжлэх ухааны сургууль</li>
          </ul>
        </div>

        {/* САЛБАР СУРГУУЛЬ */}
        <div className="footer-column">
          <h3>САЛБАР СУРГУУЛЬ</h3>
          <ul>
            <li>Баянхонгор аймаг дахь салбар сургууль</li>
            <li>Дархан-Уул аймаг дахь салбар сургууль</li>
          </ul>

          <h3 className="college-title">ХАРЬЯА ПОЛИТЕХНИКИЙН КОЛЛЕЖ</h3>
          <ul>
            <li>Булган аймаг дахь политехникийн коллеж</li>
            <li>Сэлэнгэ аймаг дахь политехникийн коллеж</li>
            <li>Төв аймаг дахь политехникийн коллеж</li>
          </ul>
        </div>

        {/* ХОЛБОО БАРИХ */}
        <div className="footer-column">
          <h3>ХОЛБОО БАРИХ</h3>
          <p>📍 17029 Улаанбаатар, Хан-Уул дүүрэг, 22-р хороо, Зайсан</p>
          <p>☎ 75107777, 11-341377</p>
          <p>✉ international@muls.edu.mn</p>
          <p>✉ info@muls.edu.mn</p>
          <p>📩 Санал хүсэлт илгээх</p>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="copyright">© 2026 Хөдөө аж ахуйн их сургууль</div>
    </div>
  );
}

// АПП КОМПОНЕНТЫГ ЭКСПОРТ ХИЙНЭ
export default App;
