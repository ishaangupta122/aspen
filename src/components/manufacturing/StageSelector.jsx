const pad = (n) => String(n).padStart(2, "0");

/** Quality checkpoints along the product's path: a connected rail of five stages. */
export default function StageSelector({ items }) {
  return (
    <ol className="qr">
      {items.map(({ title, text, tags }, i) => (
        <li className="qr-step" key={title}>
          <span className="qr-node" aria-hidden="true">{pad(i + 1)}</span>
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="qr-tests">
            <span>Tests</span>
            <ul>
              {tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
