import React from 'react';
import Form from './Form';
import Header from './Header';

function App() {
  return (
  <div className="div--darkenOverlay">
    <div className="wrapper">
    <Header title= "kalkulator walutowy"/>
      <main className="main">
       <Form/>
        <section className="section">
          <p className="section__paragraph">Kursy walut pochodzą ze strony : <a className="section__link"
              href="https://internetowykantor.pl/kursy-walut/" target="_blank" rel="noreferrer noopener">
              "internetowykantor.pl"</a> z dnia 7 lipca 2020<span className="link__span">(otworzy się w nowej karcie &#128521)</span></p>
        </section>
      </main>
    </div>
  </div>
  );
}

export default App;
