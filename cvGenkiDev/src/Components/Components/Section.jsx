


function Section({ title, children, id, className }) {
  return (
    <section id={id} className={className}>
      {title && <h2 className="nameTitle">{title}</h2>}
      <div>{children}</div>
    </section>
  );
}

export default Section;
