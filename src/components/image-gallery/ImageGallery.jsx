import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';
import Button from 'components/button/Button';
import Loader from 'components/loader/Loader';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ gallery, spinner, onLoadNextPage, onOpenModal }) => {
  return (
    <>
      {spinner && <Loader />}
      {gallery && (
        <>
          <ul className={css.gallery}>
            {gallery.map(item => {
              const { id, webformatURL, largeImageURL, tags } = item;
              return (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  smallImg={webformatURL}
                  alt={tags}
                  largeImg={largeImageURL}
                  openModal={onOpenModal}
                />
              );
            })}
          </ul>
          <Button OnLoadMore={onLoadNextPage} />
        </>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  spinner: PropTypes.bool.isRequired,
  onLoadNextPage: PropTypes.func.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
