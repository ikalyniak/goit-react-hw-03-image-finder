import React from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends React.Component {
  static propTypes = {
    key: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    onLargeImg: PropTypes.func.isRequired,
    largeImg: PropTypes.string.isRequired,
  };

  render() {
    const { src, onLargeImg, largeImg } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={() => onLargeImg(largeImg)}>
        <img src={src} alt="" className="ImageGalleryItem-image" />
      </li>
    );
  }
}

export default ImageGalleryItem;
