import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const API_KEY = '22540552-ad6fedb3f5750c17229d327bb';
const BASE_URL = 'https://pixabay.com/api/';
const STATUS = {
  idle: 'idle',
  pending: 'pending',
  rejected: 'rejected',
  resolved: 'resolved',
};

class ImageGallery extends React.Component {
  static propTypes = { searchQuery: PropTypes.string };

  state = {
    images: [],
    page: 1,
    perPage: 12,
    status: STATUS.idle,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ status: STATUS.pending });
      fetch(
        `${BASE_URL}?q=${this.props.searchQuery}&page=${this.state.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}`,
      )
        .then(response => response.json())
        .then(data => {
          if (data.hits.length > 0) {
            this.setState({
              images: [...prevState.images, ...data.hits],
              status: STATUS.resolved,
            });
          } else
            toast.error(`no data on your request '${this.props.searchQuery}'`);
        })
        .catch(error => {
          this.setState({ status: STATUS.rejected, error });
          toast.error(`${error.message}`);
        });
    }
  }
  render() {
    const { status } = this.state;

    if (status === STATUS.idle) {
      return <h2>---idle---</h2>;
    }

    if (status === STATUS.pending) {
      return (
        <div className="loaderWrapper">
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        </div>
      );
    }

    if (status === STATUS.rejected) {
      return <h2>--rejected---</h2>;
    }

    if (status === STATUS.resolved) {
      return (
        <ul className={styles.ImageGallery}>
          {this.state.images.map(image => (
            <ImageGalleryItem
              key={image.id}
              src={image.webformatURL}
              largeImg={image.largeImageURL}
              onClick={this.props.onClick}
            />
          ))}
        </ul>
      );
    }
  }
}

export default ImageGallery;
