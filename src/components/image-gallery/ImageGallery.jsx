import ImageGalleryItem from 'components/image-gallery-item/ImageGalleryItem';
import Button from 'components/button/Button';
import Loader from 'components/loader/Loader';
import css from './ImageGallery.module.css';

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

export default ImageGallery;
