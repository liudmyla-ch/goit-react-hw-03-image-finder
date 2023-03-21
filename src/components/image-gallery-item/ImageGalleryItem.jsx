import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ smallImg, largeImg, alt, id, openModal }) => {
  return (
    <>
      <li className={css.item} id={id} >
        <img className={css.itemImage} src={smallImg} alt={alt} data-large={largeImg} onClick={openModal} />
      </li>
    </>
  );
};

export default ImageGalleryItem;
