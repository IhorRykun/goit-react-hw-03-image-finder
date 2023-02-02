import React from 'react';
import { ImgGalleryList } from './components/ImgGalleryList/ImgGalleryList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Modal } from './components/Modal/Modal';
import { FetchImg, needValues } from './components/API_Fetch/APi_Fetch';
import { ButtonLoadImg } from './components/Button/ButtonLoadImg';

export class App extends React.Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    error: null,
    showModal: false,
    originalImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const nextSearchQuery = this.setState.searchQuery;
    const prevPage = prevState.page;
    const page = this.state.page;

    if (prevSearchQuery !== nextSearchQuery || prevPage !== page) {
      this.renderGalery();
    }
  }

  renderGalery = async () => {
    const { searchQuery, page } = this.state;
    try {
      const { hits, totalHits } = await FetchImg(searchQuery, page);
      if (totalHits === 0) {
        window.alert('Вибачте, спробуйте ще раз');
      }
      const newImages = needValues(hits);
      this.setState(({ images }) => ({
        images: [...images, ...newImages],
        totalHits,
      }));
    } catch (error) {
      this.setState({
        error,
      });
    }
  };

  onSubmit(searchQuery) {
    this.setState({ searchQuery, images: [], page: 1 });
  }

  onLoadMore() {
    this.setState(prevState => ({
      paga: prevState.paga + 1,
    }));
  }

  openModal(originalImageURL, tags) {
    this.toggleModal();
    this.setState({ originalImageURL, tags });
  }

  toggleModal() {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  }

  render() {
    const { images, originalImageURL, tags, showModal, totalHits } = this.state;
    const allImages = images.length === totalHits;
    return (
      <>
        <SearchForm onSubmit={this.onSubmit} />
        <ImgGalleryList images={images} onOpenModal={this.openModal} />
        {images.length !== 0 && !allImages && (
          <ButtonLoadImg onClick={this.onLoadMore} />
        )}

        {showModal && (
          <Modal
            onClick={this.toggleModal}
            largeImage={originalImageURL}
            alt={tags}
          />
        )}
      </>
    );
  }
}
