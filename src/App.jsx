import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Owoc from './Owoc';
import Pospolita from './assets/img/Pospolita.jpeg';
import Radana from './assets/img/Radana.jpg';
import Concorde from './assets/img/Concorde.jpg';
import Antonowka from './assets/img/Antonowka.jpg';
import Gala from './assets/img/Gala.jpg';
import Jonagold from './assets/img/Jonagold.jpg';
import Ligol from './assets/img/Ligol.jpg';
import Domowa from './assets/img/Domowa.jpg';
import Kalifornijska from './assets/img/Kalifornijska.jpg';
import { useState } from 'react';

function App() {



  function handleCartAdd(id) {
    setOwoce(prevOwoce =>
      prevOwoce.map(owoc => owoc.id === id && owoc.sztuk > 0 ? { ...owoc, sztuk: owoc.sztuk - 1 } : owoc )
    );
    setKoszyk(prevKoszyk => {
      var istnieje = prevKoszyk.find(item => item.id === id);
      if(istnieje) {
        return prevKoszyk.map(item => item.id === id ? { ...item, sztuk: item.sztuk + 1} : item);
      }else {
        return prevKoszyk.push({id: id, sztuk: 1});
      }
    });
  }

  function showCart() {
    console.log(JSON.stringify(koszyk));
  }

  const [koszyk, setKoszyk] = useState([]);

  const [showGruszki, setGruszki]  = useState(true);
  const [showJablka, setJablka] = useState(true);
  const [showSliwki, setSliwki] = useState(true);

  const [owoce, setOwoce] = useState([
    {id:1, typ:"gruszka", odmiana:"pospolita", grafika: Pospolita, opis:"Najczęściej występująca gruszka w Polsce", sztuk:21, cena:7.55},
    {id:2, typ:"gruszka", odmiana:"Radana", grafika: Radana, opis:"odmiana uprawna (kultywar) gruszy należąca do grupy grusz zachodnich otrzymanych w Czechach", sztuk:12, cena:6.50},
    {id:3, typ:"gruszka", odmiana:"Concorde", grafika: Concorde, opis:"Duże o kształcie butelkowatym, wydłużone. Zbliżone wyglądem do owoców Konferencji, lecz bardziej pękate", sztuk:11, cena:4.50},
    {id:4, typ:"jabłko", odmiana:"Antonówka", grafika: Antonowka, opis:"Średniej wielkości, o zmiennym kształcie najczęściej kulistym lub nieco wydłużonym, niesymetryczne", sztuk:12, cena:4.50},
    {id:5, typ:"jabłko", odmiana:"Gala", grafika: Gala, opis:"Średniej wielkości, o zmiennym kształcie najczęściej kulistym lub nieco wydłużonym, niesymetryczne", sztuk:8, cena:6.33},
    {id:6, typ:"jabłko", odmiana:"Jonagold", grafika: Jonagold, opis:"Duże lub bardzo duże, stożkowato-kuliste, czasem nieregularne, przy kielichu lekko żebrowane", sztuk:21, cena:3.56},
    {id:7, typ:"jabłko", odmiana:"Ligol", grafika: Ligol, opis:"Duże lub bardzo duże kształtu kulisto-stożkowatego", sztuk:11, cena:4.32},
    {id:8, typ:"śliwka", odmiana:"Domowa", grafika: Domowa, opis:"odmiany o pestkach łatwo odchodzących od miąższu owocu", sztuk:21, cena:7.49},
    {id:9, typ:"śliwka", odmiana:"Kalifornijska", grafika: Kalifornijska, opis:"Granatowe, wydłużone, przy szypułce zwężone, czasem elipsoidalne lub jajowate, miąższ zwięzły, aromatyczny, winnosłodki, dobrze odchodzi od pestki", sztuk:13, cena:9.43}
  ])

  const filteredGruszki = owoce.filter(owoc => owoc.typ === "gruszka");
  const filteredJablka = owoce.filter(owoc => owoc.typ === "jabłko");
  const filteredSliwki = owoce.filter(owoc => owoc.typ === "śliwka");

  return (
    <div className='container d-flex flex-wrap justify-content-center'>
      <div className='w-100 justify-content-center d-flex m-3'>
        <div className='form-check form-switch me-3'>
          <input className='form-check-input' type='checkbox' id='jablkaCheckbox' onClick={() => setJablka(!showJablka)} defaultChecked/>
          <label className='form-check-label' htmlFor='jablkaCheckbox'>Jabłka</label>
        </div>
        <div className='form-check form-switch me-3'>
          <input className='form-check-input' type='checkbox' id='gruszkiCheckbox' onClick={() => setGruszki(!showGruszki)} defaultChecked/>
          <label className='form-check-label' htmlFor='gruszkiCheckbox'>Gruszki</label>
        </div>
        <div className='form-check form-switch me-3'>
          <input className='form-check-input' type='checkbox' id='sliwkiCheckbox' onClick={() => setSliwki(!showSliwki)} defaultChecked/>
          <label className='form-check-label' htmlFor='sliwkiCheckbox'>Śliwki</label>
        </div>
        <button className='btn btn-primary' onClick={showCart}>pokaż koszyk</button>
      </div>
      {showJablka && filteredJablka.map(jablko => (
        <Owoc key={jablko.id} owoc={jablko} onCartAdd={handleCartAdd} />
      ))}

      {showGruszki && filteredGruszki.map(gruszka => (
        <Owoc key={gruszka.id} owoc={gruszka} onCartAdd={handleCartAdd} />
      ))}

      {showSliwki && filteredSliwki.map(sliwka => (
        <Owoc key={sliwka.id} owoc={sliwka} onCartAdd={handleCartAdd} />
      ))}
    </div>
  )
}

export default App
