import React from 'react';
import { ImgGalleryList } from './components/ImgGalleryList/ImgGalleryList';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Modal } from './components/Modal/Modal';
import { FetchImg } from './components/API_Fetch/APi_Fetch';

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

  componentDidUpdate() {
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
    } catch {}
  };
  render() {
    const { images, originalImageURL, tags, showModal, totalHits } = this.state;
    const allImages = images.length === totalHits;
    return (
      <>
        <SearchForm />
      </>
    );
  }
}
