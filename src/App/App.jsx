import { Component } from 'react';
import { ImgGalleryList } from './components/ImgGalleryList/ImgGalleryList';
import { SearchForm } from './components/Searchbar/Searchbar';
import { Modal } from './components/Modal/Modal';
import { FetchImg, needValues } from './API_Fetch/APi_Fetch';
import { ButtonLoadImg } from './components/Button/ButtonLoadImg';
import css from './App.module.css';
export class App extends Component {
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
        console.log('object');
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

  onSubmitForm = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1 });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      paga: prevState.page + 1,
    }));
  };

  openModal = (originalImageURL, tags) => {
    this.toggleModal();
    this.setState({ originalImageURL, tags });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, originalImageURL, tags, showModal, totalHits } = this.state;
    const allImages = images.length === totalHits;
    return (
      <>
        <header className={css.container}>
          <SearchForm onSubmit={this.onSubmitForm} />
        </header>
        <main className={css.container_main}>
          <ImgGalleryList images={images} onOpenModal={this.openModal} />
          {images.length !== 0 && !allImages && (
            <ButtonLoadImg onClick={this.onLoadMore} />
          )}
          {showModal && (
            <Modal
              onModalClick={this.toggleModal}
              largeImage={originalImageURL}
              alt={tags}
            />
          )}
        </main>
      </>
    );
  }
}
