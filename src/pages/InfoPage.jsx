import { Link } from "react-router-dom";
import "./InfoPage.css";
export default function InfoPage({ title, intro, topics }) {
  return <main className="info-page"><div className="info-hero"><span>ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ</span><h1>{title}</h1><p>{intro}</p></div><section className="info-content"><h2>Үндсэн мэдээлэл</h2><div className="info-grid">{topics.map((topic,i)=><article className="info-card" key={topic}><span className="info-number">{String(i+1).padStart(2,"0")}</span><h3>{topic}</h3><p>{title} чиглэлийн мэдээлэл, үйл ажиллагааны талаар дэлгэрэнгүй танилцана уу.</p></article>)}</div><p className="info-source">Албан ёсны дэлгэрэнгүй мэдээлэл: <a href="https://muls.edu.mn/" target="_blank" rel="noreferrer">muls.edu.mn ↗</a></p><Link className="info-back" to="/">← Нүүр хуудас руу буцах</Link></section></main>;
}
