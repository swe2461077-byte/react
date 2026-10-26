function NewsCard({ title, description, date, image }) {
  return (
    <article className="news-card">
      <div className="news-image">МЭДЭЭ</div>

      <div className="news-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span>{date}</span>
        {image && <img src={image} alt={title} className="news-thumbnail" />}
      </div>
    </article>
  );
}

export default NewsCard;
