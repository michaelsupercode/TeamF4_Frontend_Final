

import './Styles/css/App.css';

import Header from './Components/header';
import Collapsible from 'react-collapsible';
import ArrowsImg from './Components/arrows';
import drinkCategories from './Data/drinkCategories.json';
import SingleDrink from './Components/singleDrink';
import Footer from './Components/footer';
import SearchField from './Components/searchField';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchField />
      <Collapsible trigger={<ArrowsImg />}>
        <div className='category-container'>
          {drinkCategories.map((item) => <SingleDrink
            key = {item.id}
            title = {item.title}
            description = {item.description}
            class = {item.class}
            api = {item.api}
          />)}
        </div>
      </Collapsible>
      <Footer />
    </div>
  );
}

export default App;
