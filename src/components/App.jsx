import React, { Component } from 'react';
import ImageGallery from './image-gallery/ImageGallery';
import Modal from './modal/Modal';

import Searchbar from './searchbar/Searchbar';

export class App extends Component {
  state = {
    value: '',
    collection: null,
    loading: false,
    perPage: '12',
    showModal: false,
    modalImg: null,
    alt: null,
  };

  fetchGallery = () => {
    const { value, perPage } = this.state;
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?key=33165254-c3e62d75cf9018f52b0cf66fd&q='${value}'&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}`
      )
        .then(res => res.json())
        .then(data => {
          const collection = data.hits;
          this.setState({ collection });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    }, 500);
  };
  componentDidUpdate(prevProps, prevState) {
    const { perPage, value } = this.state;
    if (prevState.perPage !== perPage) {
      this.setState({ loading: true });
      this.fetchGallery();
      return;
    }

    if (prevState.value !== value) {
      this.setState({ loading: true });
      this.fetchGallery();
      return;
    }
  }
  onLoadMore = () => {
    const { perPage } = this.state;
    this.setState({ perPage: perPage + 12 });
  };

  onOpenModal = evt => {
    const { alt } = evt.target;
    const modalImg = evt.target.dataset.large;
    this.setState({ modalImg, alt, showModal:true });

  };
  onCloseModal=()=>{
    this.setState({ showModal:false });
  }

  onSubmitForm = value => {
    this.setState({ value, perPage: 12,collection: null, });
  };

  render() {
    const { collection, loading, showModal, modalImg, alt } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSubmitForm} />
        <ImageGallery
          gallery={collection}
          spinner={loading}
          onLoadNextPage={this.onLoadMore}
          onOpenModal={this.onOpenModal}
        />
        {showModal && <Modal largeImg={modalImg} alt={alt} onClose={this.onCloseModal} />}
      </>
    );
  }
}
