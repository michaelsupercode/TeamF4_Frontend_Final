import Footer from "./footer";
import Header from "./header";
import image9 from '../Images/image 9.jpg';
import image10 from '../Images/image 10.jpg';
import image11 from '../Images/image 11.jpg';

const AddDrink = () => {
  return (
    <>
      <Header />
      <h2>Füge deine eigenen Getränke hinzu!</h2>
      <section className="add-drink-section">
        <form onSubmit={(e) => e.preventDefault()}>
          <input className="gin" type="text" name="name" placeholder="Name" />
          <input className="vodka" type="text" name="category" placeholder="Kategorie" />
          <input className="rum" type="text" name="image" placeholder="Bild URL" />
          <textarea className="scotch" name="instruction" placeholder="Anleitung"></textarea>
          <input className="alkoholfrei" type="text" name="ingredient1" placeholder="Zutat 1" />
          <input className="zufall" type="text" name="measure1" placeholder="Menge Zutat 1" />
          <input className="gin" type="text" name="ingredient2" placeholder="Zutat 2" />
          <input className="vodka" type="text" name="measure2" placeholder="Menge Zutat 2" />
          <input className="rum" type="text" name="ingredient3" placeholder="Zutat 3" />
          <input className="scotch" type="text" name="measure3" placeholder="Menge Zutat 3" />
          <input type="submit" name="submit" value="Submit" />
        </form>
        <figure>
          <img src={image9} alt="-" />
          <img src={image10} alt="-" />
          <img src={image11} alt="-" />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default AddDrink;