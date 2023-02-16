import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './header';
import Collapsible from 'react-collapsible';
import Footer from './footer';
import ArrowsImg from './arrows';
import Vector from '../Images/Vector.png';
import SearchField from './searchField';

const CocktailList = () => {
  const [mix, setMix] = useState([]);
  const [detail, setDetail] = useState([]);
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(true);
  let apiId = useParams('api')

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/${apiId.api}`)
      .then(response => response.json())
      .then(json => {
        setMix(json.drinks);
      });
  }, [apiId]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then(response => response.json())
      .then(json => {
        setDetail(json.drinks);
        console.log(json.drinks);
      });
  }, [name]);
  return (
    <>
      <Header />
      <SearchField />
      <Collapsible trigger={<ArrowsImg />}>
        <div>
          <div className='cocktail-list-container'>
            {mix.map((item, i) => {
              return (
                <div key={i} className='cocktail-container'>
                  <article onClick={() => { setName(item.strDrink); setVisible(false) }} className="drink-list">
                    <img src={item.strDrinkThumb} alt="-" />
                    <div className="title-wrapper">
                      <h3>{item.strDrink}</h3>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          <div>
            {detail.map((item, i) => {
              const allInfo = [
                {
                  measure: item.strMeasure1,
                  ingredient: item.strIngredient1
                },
                {
                  measure: item.strMeasure2,
                  ingredient: item.strIngredient2
                },
                {
                  measure: item.strMeasure3,
                  ingredient: item.strIngredient3
                },
                {
                  measure: item.strMeasure4,
                  ingredient: item.strIngredient4
                },
                {
                  measure: item.strMeasure5,
                  ingredient: item.strIngredient5
                },
                {
                  measure: item.strMeasure6,
                  ingredient: item.strIngredient6
                },
                {
                  measure: item.strMeasure7,
                  ingredient: item.strIngredient7
                },
                {
                  measure: item.strMeasure8,
                  ingredient: item.strIngredient8
                },
                {
                  measure: item.strMeasure9,
                  ingredient: item.strIngredient9
                },
                {
                  measure: item.strMeasure10,
                  ingredient: item.strIngredient10
                },
                {
                  measure: item.strMeasure11,
                  ingredient: item.strIngredient11
                },
                {
                  measure: item.strMeasure12,
                  ingredient: item.strIngredient12
                },
                {
                  measure: item.strMeasure13,
                  ingredient: item.strIngredient13
                },
                {
                  measure: item.strMeasure14,
                  ingredient: item.strIngredient14
                },
                {
                  measure: item.strMeasure15,
                  ingredient: item.strIngredient15
                }
              ];
              return (
                <div key={i} className={`drink-details ${visible ? '' : 'visible'}`}>
                  <div className='big-wrapper'>
                    <div className='detail-image-wrapper'>
                      <img onClick={() => setVisible(true)} className='vector' src={Vector} alt="-" />
                      <h3>{item.strDrink}</h3>
                      <img src={item.strDrinkThumb} alt="-" />
                    </div>
                    <article className='detail-container'>
                      <h4>Zutaten</h4>
                      <ul>
                        {allInfo.map((info, i) => {
                          return (
                            <li key={i}>{info.measure} {info.ingredient}</li>
                          );
                        })}
                      </ul>
                      <p>{item.strInstructions}</p>
                    </article>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Collapsible>
      <Footer />
    </>
  );
}

export default CocktailList;