import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
