


function Section({ title, children }) {
  return (
    <section>
      {title && <h2 className="nameTitle">{title}</h2>}
      <div>{children}</div>
    </section>
  );
}

export default Section;
