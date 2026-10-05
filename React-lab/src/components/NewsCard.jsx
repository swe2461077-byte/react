function NewsCard({ title, description, date }) {
  return (
    <article className="news-card">
      <div className="news-image">МЭДЭЭ</div>

      <div className="news-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>{date}</span>
      </div>
    </article>
  );
}

export default NewsCard;
