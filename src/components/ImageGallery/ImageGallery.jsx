import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, handleImage }) => {
  // const handleImage = event => {
  //   const currentImg = event.target.attributes[3].value;
  //   console.dir(currentImg);
  //   openModal(currentImg);
  // };
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
