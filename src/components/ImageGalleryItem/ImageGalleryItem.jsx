import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ smallImgURL, id, openModal, largeImageURL }) => {
  return (
    <li className={css.photo}>
      <img
        key={id}
        src={smallImgURL}
        alt={id}
        onClick={() => openModal({ largeImageURL })}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
