import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer'
import landscapes from './data/land';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner title="Enjoy the Gallery of landscapes" text="Canada is a country filled with breathtaking landscapes that captivate the senses. 
                            From the majestic Rocky Mountains with their towering peaks and pristine alpine lakes, 
                            to the rugged coastal beauty of the Atlantic and Pacific shores, Canada offers a 
                            diverse array of natural wonders."/>
        <Gallery landscapes={landscapes} />
        <Footer text = "This a Footer"/>
    </div>
  );
}

export default App;
