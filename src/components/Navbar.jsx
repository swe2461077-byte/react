import { NavLink } from "react-router-dom";

const menus = [
  { title: "ХААИС", path: "/haais" },
  { title: "УДИРДАХ ЗӨВЛӨЛ", path: "/zuvlul" },
  { title: "ЭРДЭМ ШИНЖИЛГЭЭ, ИННОВАЦ", path: "/erdem-shinjilgee" },
  { title: "ХӨГЖЛИЙН БОДЛОГО", path: "/hugjliin-bodlogo" },
  { title: "ХАМТЫН АЖИЛЛАГАА", path: "/hamtiin-ajillagaa" },
  { title: "ОЮУТАН", path: "/oyutan" },
  { title: "РЕКТОРЫН АЖЛЫН АЛБА", path: "/rektoriin-alba" },
  { title: "ХОЛБОО БАРИХ", path: "/holboo-barih" },
];

menus.splice(0, 0, { title: "НҮҮР", path: "/" });
menus.splice(3, 0, { title: "СУРГАЛТ", path: "/surgalt" });

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="Үндсэн цэс">
      {menus.map((item) => (
        <NavLink key={item.path} to={item.path} end={item.path === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
}
