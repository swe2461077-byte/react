// App.css файлыг React компонентод холбоно
import "./App.css";

// React Router-ийн шаардлагатай компонентуудыг оруулж байна

import {
  BrowserRouter, // BrowserRouter Routing системийг ажиллуулна
  Routes, // Routes Route-уудыг багцална
  Route, // Route URL зам болон харуулах component-ийг тохируулна
} from "react-router-dom";
// Бүрэлдэхүүн хэсгүүдийг (Components) оруулж байна
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer импорт хийсэн
// Нүүр хуудасны component-ийг оруулж байна
import Home from "./pages/Home";
// Surgalt component
import Surgalt from "./pages/Surgalt";
import InfoPage from "./pages/InfoPage";
import Oyutan from "./pages/Oyutan";
// ҮНДСЭН APP КОМПОНЕНТ

function App() {
  return (
    <BrowserRouter>
      {/* Вэб сайтын бүх хэсгийг нэг div дотор багцалж байна */}
      <div className="website">
        {/* HEADER */}
        <Header />

        {/* NAVBAR */}
        <Navbar />

        {/* ROUTING URL-ээс хамаарч ямар component харуулахыг React Router шийднэ. */}
        <Routes>
          {/* НҮҮР ХУУДАС */}
          <Route path="/" element={<Home />} />

          {/* СУРГАЛТ ХУУДАС */}
          <Route path="/surgalt" element={<Surgalt />} />
          <Route
            path="/haais"
            element={
              <InfoPage
                title="Хөдөө аж ахуйн их сургуулийн тухай"
                intro="Хөдөө аж ахуйн их сургууль нь Монгол Улсад хөдөө аж ахуйн чиглэлийн дээд боловсрол, судалгаа, инновацийн үйл ажиллагаа эрхэлдэг их сургууль юм."
                topics={["Түүхэн замнал", "Эрхэм зорилго, үнэт зүйлс", "Бүрэлдэхүүн сургуулиуд"]}
              />
            }
          />
          <Route
            path="/zuvlul"
            element={
              <InfoPage
                title="Удирдах зөвлөл"
                intro="Их сургуулийн засаглал, стратегийн шийдвэр, бодлого болон удирдлагын үйл ажиллагааны мэдээлэл."
                topics={["Бүтэц, бүрэлдэхүүн", "Шийдвэр, тогтоол", "Засаглал"]}
              />
            }
          />
          <Route
            path="/erdem-shinjilgee"
            element={
              <InfoPage
                title="Эрдэм шинжилгээ, инновац"
                intro="Хөдөө аж ахуй, хүнс, байгаль орчин, технологийн чиглэлийн судалгаа болон инновацийн үйл ажиллагаа."
                topics={["Судалгааны чиглэл", "Эрдэм шинжилгээний төсөл", "Инновац, технологи"]}
              />
            }
          />
          <Route
            path="/hugjliin-bodlogo"
            element={
              <InfoPage
                title="Хөгжлийн бодлого"
                intro="Их сургуулийн стратеги, хөгжлийн зорилт, чанарын баталгаажуулалттай холбоотой мэдээлэл."
                topics={["Стратеги төлөвлөгөө", "Чанарын баталгаажуулалт", "Тайлан, төлөвлөлт"]}
              />
            }
          />
          <Route
            path="/hamtiin-ajillagaa"
            element={
              <InfoPage
                title="Хамтын ажиллагаа"
                intro="Дотоод, гадаадын байгууллага, их сургууль, судалгааны хүрээлэнтэй хэрэгжүүлдэг хамтын ажиллагаа."
                topics={["Олон улсын хамтын ажиллагаа", "Түнш байгууллагууд", "Хамтарсан хөтөлбөр"]}
              />
            }
          />
          <Route path="/oyutan" element={<Oyutan />} />
          <Route
            path="/rektoriin-alba"
            element={
              <InfoPage
                title="Ректорын ажлын алба"
                intro="Их сургуулийн удирдлага, захиргаа, зохион байгуулалттай холбоотой мэдээлэл."
                topics={["Удирдлагын мэдээлэл", "Албан мэдээ", "Захиргааны үйл ажиллагаа"]}
              />
            }
          />
          <Route
            path="/holboo-barih"
            element={
              <InfoPage
                title="Холбоо барих"
                intro="Хөдөө аж ахуйн их сургуультай холбогдох мэдээллийг албан ёсны сайтаас лавлана уу."
                topics={["Албан ёсны веб сайт", "Санал хүсэлт", "Байршил"]}
              />
            }
          />
          <Route
            path="*"
            element={<InfoPage title="Хуудас олдсонгүй" intro="Хаягаа шалгаад дахин оролдоно уу." topics={["Нүүр хуудас"]} />}
          />
        </Routes>

        {/* FOOTER */}
        <Footer />

        {/* COPYRIGHT */}
        <div className="copyright">© 2026 Хөдөө аж ахуйн их сургууль</div>
      </div>
    </BrowserRouter>
  );
}

// App component-ийг бусад файлд ашиглах боломжтой болгож экспортолж байна
export default App;
