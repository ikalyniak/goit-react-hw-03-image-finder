import React from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import ImageGallery from './components/ImageGallery/ImageGallery';
import Searchbar from './components/Searchbar/Searchbar';
import './App.css';

const API_KEY = '22540552-ad6fedb3f5750c17229d327bb';
const BASE_URL = 'https://pixabay.com/api/';

class App extends React.Component {
  state = {
    images: [],
    loading: false,
  };

  componentDidMount() {
    fetch(
      `${BASE_URL}?q=forest&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          images: [...data.hits],
        }),
      );
    setTimeout(() => {
      console.log(this.state.images[0].id);
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <Searchbar />
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
        {/* <ImageGallery /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
