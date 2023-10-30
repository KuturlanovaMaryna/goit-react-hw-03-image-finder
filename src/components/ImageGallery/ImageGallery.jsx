import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, handleImage }) => {
  return (
    <ul className={css.imageContainer} onClick={handleImage}>
      {images !== null &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            smallImgURL={image.webformatURL}
            id={image.id}
            onClick={handleImage}
          />
        ))}
    </ul>
  );
};
export default ImageGallery;
