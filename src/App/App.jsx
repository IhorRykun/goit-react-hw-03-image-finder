import React from 'react';
import css from '../App/App.module.css';
import { Button } from './components/form/button/Button';

export class App extends React.Component {
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(r => r.json())
      .then(console.log);
  }
  render() {
    return (
      <div className={css.container}>
        <input className={css.input} type="text" placeholder="name" />
        <Button>Пошук</Button>
      </div>
    );
  }
}
