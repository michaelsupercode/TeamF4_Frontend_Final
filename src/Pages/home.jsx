import { useState } from "react";
import Header from '../Components/header';
import Collapsible from 'react-collapsible';
import ArrowsImg from '../Components/arrows';
import drinkCategories from '../Data/drinkCategories.json';
import SingleDrink from '../Components/singleDrink';
import Footer from '../Components/footer';
import SearchField from '../Components/searchField';

import introM from "../video/intro.mp4";
import ReactPlayer from "react-player";

const Home = () => {
    const [intro, setIntro] = useState(true);

    window.setTimeout(function() {
        setIntro(false);
    }, 25700);

 

    return (
		<div>
		  {intro && (
			<div className="landingpage">
			  <ReactPlayer
			 	muted
				playing={true}
				url={introM}
				width={1280}
				height={720}
				controls={false}
				autoPlay={true}
			  />
			</div>
		  )}
	{!intro && (
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
	)}	
		</div>
	  
	);
}
	
	export default Home;