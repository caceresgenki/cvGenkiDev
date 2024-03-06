

const { title } = props;

function Section() {
  return (
    <section>
      {title && <h2>{title}</h2>}
    </section>

  )


}

export default Section
