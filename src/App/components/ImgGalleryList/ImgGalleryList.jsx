import PropTypes from 'prop-types';
import { ImgGalleryItem } from '../ImgGalleryItem/ImgGalleryItem';

export const ImgGalleryList = ({ images, onOpenModal }) => {
  <ul>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImgGalleryItem
        key={id}
        url={webformatURL}
        largeImageURL={largeImageURL}
        tag={tags}
        openModal={onOpenModal}
      />
    ))}
  </ul>;
};

ImgGalleryList.prototype = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
