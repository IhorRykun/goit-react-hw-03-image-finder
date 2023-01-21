import React from 'react';
import css from '../App/App.module.css';
import { Button } from './components/form/button/Button';
import { ImSearch } from 'react-icons/im';

export class App extends React.Component {
  state = {
    hits: '',
  };
  componentDidMount() {
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=30187143-4d7f5699d03729238b163605a&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(r => r.json())
      .then(hits => this.setState({ hits }));
  }
  render() {
    const { hits } = this.state;
    return (
      <header>
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
          <li>{hits[0]}</li>
        </ul>
      </header>
    );
  }
}
