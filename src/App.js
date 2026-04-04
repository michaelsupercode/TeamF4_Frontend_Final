

import './Styles/css/App.css';

import Header from './Components/header';
import drinkCategories from './Data/drinkCategories.json';
import SingleDrink from './Components/singleDrink';
import Footer from './Components/footer';
import SearchField from './Components/searchField';

function App() {
  const categories = (
    <div className='category-container'>
      {drinkCategories.map((item) => <SingleDrink
        key = {item.id}
        title = {item.title}
        description = {item.description}
        categoryClass = {item.class}
        api = {item.api}
      />)}
    </div>
  );

  return (
    <div className="App">
      <Header />
      <SearchField />
      {categories}
      <Footer />
    </div>
  );
}

export default App;
