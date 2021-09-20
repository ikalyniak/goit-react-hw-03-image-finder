import React from 'react';
import PropTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    onLargeImg: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired,
  };

  render() {
    const { src, onLargeImg, largeImg, alt } = this.props;
    return (
      <li
        className={styles.ImageGalleryItem}
        onClick={() => onLargeImg(largeImg)}
      >
        <img src={src} alt={alt} className={styles.ImageGalleryItemImage} />
      </li>
    );
  }
}

export default ImageGalleryItem;
