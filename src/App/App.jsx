import React from 'react';
import css from '../App/App.module.css';
import { Button } from './components/form/button/Button';
import { ImSearch } from 'react-icons/im';
import { Modal } from './components/Modal/Modal';

export class App extends React.Component {
  state = {
    hits: '',
  };
  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=30187143-4d7f5699d03729238b163605a&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(r => r.json())
      // .then(console.log)
      .then(hits => this.setState({ hits }));
  }
  render() {
    const { hits } = this.state;
    return (
      <header>
        <Modal>
          <img
            src="https://img2.akspic.ru/previews/3/9/4/1/7/171493/171493-android-smartfon-fhd-purpur-zhidkiy-550x310.jpg"
            alt="img.name"
            style={{
              top: `50%`,
              left: `50%`,
              position: 'fixed',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </Modal>
        <form className={css.container}>
          <input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            autoComplete="off"
          />
          <Button>
            <ImSearch />
            Пошук
          </Button>
        </form>
        <ul>
          <li>{hits.collections}</li>
        </ul>
      </header>
    );
  }
}
