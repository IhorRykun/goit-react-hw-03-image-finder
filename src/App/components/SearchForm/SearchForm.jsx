import React from 'react';
export class SearchForm extends React.Component {
  state = {
    searchQuery: '',
  };

  handleChange(e) {
    this.setState({
      searchQuery: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      window.alert('Веддіть текст пошуку');
    }
  }

  reset() {
    this.setState({
      searchQuery: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          autoComplete="off"
          placeholder="search images"
        />
        <button type="submit">Пошук</button>
      </form>
    );
  }
}
