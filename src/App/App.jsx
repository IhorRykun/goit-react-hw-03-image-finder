import React from 'react';
import css from '../App/App.module.css';
import { Button } from './components/form/button/Button';
import { ImSearch } from 'react-icons/im';

const API_KAY = `30187143-4d7f5699d03729238b163605a`;
export class App extends React.Component {
  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${API_KAY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(r => r.json())
      .then(console.log);
  }
  render() {
    return (
      <header>
        <form className={css.container}>
          <input
            className={css.input}
            type="text"
            autofocus
            placeholder="Search images and photos"
            autoComplete="off"
          />
          <Button>
            <ImSearch />
            Пошук
          </Button>
        </form>
      </header>
    );
  }
}
