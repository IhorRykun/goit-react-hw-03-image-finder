import React from 'react';


export class App extends React.Component {
  state = {
    hits: '',
    showModal: false,
  };

  togle = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
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
    const { hits, showModal } = this.state;
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
          <li>{hits.collections}</li>
        </ul>
        <button type="button" onClick={this.togle}>
          відкрити модалку
        </button>
        {showModal && (
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
            <button type="button" onClick={this.togle}>
              закрити модалку
            </button>
          </Modal>
        )}
      </header>
    );
  }
}
