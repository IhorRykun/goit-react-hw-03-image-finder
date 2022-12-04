import React from 'react';
import css from '../App/App.module.css';
import { Button } from './components/form/button/Button';
import { Form } from './components/form/form';

export const App = () => {
  return (
    <div className={css.container}>
      <input className={css.input} type="text" placeholder="name" />
      <Button>Пошук</Button>
    </div>
  );
};
