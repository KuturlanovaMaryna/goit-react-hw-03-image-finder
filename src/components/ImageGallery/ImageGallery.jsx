import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.imageContainer} onClick={openModal}>
      {images !== null &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            smallImgURL={image.webformatURL}
            id={image.id}
            onClick={openModal}
            largeImageURL={image.largeImageURL}
          />
        ))}
    </ul>
  );
};
export default ImageGallery;
