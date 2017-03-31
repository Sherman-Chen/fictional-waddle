import React, { Component } from 'react';
import axios from 'axios';

// trnsl.1.1.20170331T214131Z.ee90e11f58b72b65.937f7235bb3c6f052f4ecd1e731f3755b5e4334f


class App extends Component {
  constructor() {
    super();
    this.state = {
      inputBase: '',
      inputTarget: '',
      targetLangauge: 'es'
    };
  }

  onInputBaseChange = (e) => {
    this.setState({
      inputBase: e.target.value
    });
  }

  handleSelectLangaugeChange = (e) => {
    this.setState({
      targetLangauge: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    let translated;
    if (this.state.inputBase.length > 0) {
      axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170331T214131Z.ee90e11f58b72b65.937f7235bb3c6f052f4ecd1e731f3755b5e4334f&lang=${this.state.targetLangauge}&text=${this.state.inputBase}`)
          .then(res => {
            console.log(res.data.text[0]);
            translated = res.data.text[0];
            this.setState({
              inputTarget: translated
            });
          })
          .catch(e => {
            console.log(e);
          });
    } else {
      this.setState({
        inputTarget: ''
      });
    }
  }

  render() {
    return (
      <section>
        <h1>Translator</h1>
        <section>
          <form onSubmit={this.onSubmit}>
            <h2>Base Language</h2>
            <textarea name="input1" id="" cols="30" rows="10" value={this.state.inputBase} onChange={this.onInputBaseChange}></textarea>
            <section>            
              <h2>Target Language</h2>
              <select name="" id="" onChange={this.handleSelectLangaugeChange}>
                <option value="es">Spanish - Español</option>
                <option value="ru">Russian - Русский</option>
                <option value="zh">Chinese - 中文</option>
                <option value="ko">Korean - 한국어</option>
                <option value="tl">Tagalog - Tagalog</option>
              </select>
            </section>
            <textarea name="input1" id="" cols="30" rows="10" value={this.state.inputTarget}></textarea>
            <br />
            <button>Translate</button>
          </form>
        </section>
      </section>
    );
  }
}

export default App;
