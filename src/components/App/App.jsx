import axios from 'axios';
import React, { Component } from 'react';
import css from './App.module.css';
import SearchBar from 'components/Searchbar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import Button from 'components/Buton/Button';

export default class App extends Component {
  state = {
    URL: 'https://pixabay.com/api/',
    API_KEY: '39422970-7b6782b5257085f988eb60a82',
    images: null,
    isLoading: false,
    error: null,
    input: null,
    currentPage: 1,
    totalImages: null,
    modalImage: null,
    modal: {
      isOpen: false,
      modalData: {
        largeImage: null,
        alt: null,
      },
    },
  };

  fetchImages = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios.get(
        `${this.state.URL}?q=${this.state.input}&page=${this.state.currentPage}&key=${this.state.API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      this.setState({
        images: data.hits,
        totalImages: data.totalHits,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onSubmit = value => {
    this.setState({ input: value }, () => {
      this.fetchImages();
    });
  };

  onClick = page => {
    this.setState({ currentPage: page });
  };

  componentDidUpdate(_, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.fetchImages();
      const newImages = this.state.images;

      this.setState({
        images: [...prevState.images, ...newImages],
      });
    }
  }

  openModal = (imageImg, tags) => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: {
          largeImage: imageImg,
          alt: tags,
        },
      },
    });
  };

  closeModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modalData: null,
      },
    });
  };

  render() {
    return (
      <div className={css.container}>
        <div className={css.wrapper}>
          <SearchBar onSubmit={this.onSubmit} />
        </div>
        {this.state.isLoading && <Loader />}
        {this.state.error !== null && (
          <p className={css.error}>
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        <ImageGallery images={this.state.images} openModal={this.openModal} />
        {this.state.totalImages > 12 && <Button onClick={this.onClick} />}
        {this.state.modal.isOpen && (
          <Modal
            currentImg={this.state.modal.modalData.largeImage}
            alt={this.state.modal.modalData.alt}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}
