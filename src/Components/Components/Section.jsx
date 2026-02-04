import PropTypes from 'prop-types';

function Section({ title, children, id, className }) {
  return (
    <section id={id} className={className}>
      {title && <h2 className="nameTitle">{title}</h2>}
      <div>{children}</div>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
