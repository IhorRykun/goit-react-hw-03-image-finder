import PropTypes from 'prop-types';

export const ImgGalleryItem = ({ url, tag, openModal, largeImageURL }) => {
  return (
    <li>
      <img src={url} alt={tag} />
      onClick=
      {() => {
        openModal(largeImageURL, tag);
      }}
    </li>
  );
};

ImgGalleryItem.prototype = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
