import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImg, largeImg, alt, id, openModal }) => {
  return (
    <>
      <li className={css.item} id={id}>
        <img
          className={css.itemImage}
          src={smallImg}
          alt={alt}
          data-large={largeImg}
          onClick={openModal}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
