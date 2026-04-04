import Header from '../Components/header';
import ArrowsImg from '../Components/arrows';
import Footer from '../Components/footer';
import SearchField from '../Components/searchField';

import introM from "../video/intro.mp4";
import ReactPlayer from "react-player";

const Home = () => {
  const intro = false;

    // window.setTimeout(function() {
    //     setIntro(false);
    // }, 25700);

 

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
      <div className='Collapsible__trigger'>
				<ArrowsImg to="/cocktailList" />
      </div>
      <Footer />
    </div>
	)}	
		</div>
	  
	);
}
	
	export default Home;
