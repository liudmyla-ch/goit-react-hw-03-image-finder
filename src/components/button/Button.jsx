import css from './Button.module.css'

const Button = ({OnLoadMore}) => {
  return (
    <>
      <button type="button" onClick={OnLoadMore} className={css.button}>Load More</button>
    </>
  );
};

export default Button;
