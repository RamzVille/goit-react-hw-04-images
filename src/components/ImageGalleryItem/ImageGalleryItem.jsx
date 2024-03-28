// import { Component } from 'react';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';
import ImageModal from '../Modal/Modal';
import PropTypes from 'prop-types';

// export class ImageGalleryItem extends Component {
//   state = {
//     selectedImage: null,
//   };
export const ImageGalleryItem = ({ largeImageURL, webformatURL, tags }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // handleOpenModal = () => {
  //   this.setState({
  //     selectedImage: this.props.largeImageURL,
  //   });
  // };
  const handleOpenModal = () => {
    setSelectedImage(largeImageURL);
  };

  // handleCloseModal = () => {
  //   this.setState({ selectedImage: null });
  // };
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // render() {
  //   const { selectedImage } = this.state;
  //   const { webformatURL, tags } = this.props;

  return (
    <li className={css.imageGalleryItem} onClick={handleOpenModal}>
      <img
        className={css.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
      <ImageModal
        modalClose={handleCloseModal}
        modalOpen={selectedImage !== null}
        image={selectedImage}
      />
    </li>
  );
};
// }
  ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};