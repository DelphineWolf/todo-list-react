import {useState} from 'react';
import './App.css'


function App() {
  //Tableau des tâches
const [taches,setTaches]=useState([
{id:1,text:'Apprendre React',completed: false},
{id:2,text:'Apprendre Flutter',completed: false},
]);

//Input d'ajout de tâche
const [inputValeur,setInputValeur]=useState('');

//-------------------Fonction Ajouter tâche------------
function ajouterTache(){
  if (inputValeur !==''){
    const nouvelleTache ={id: Date.now(),text:inputValeur,completed:false}
    setTaches([...taches, nouvelleTache])
    setInputValeur('')
  }
}
  return (

<div className='app'>

<h1>Todo List</h1>
<div className='tache-input'>
  <input type="text" placeholder="Ajouter une tâche..." value={inputValeur} onChange={(e)=> setInputValeur(e.target.value)}/>
  <button onClick={ajouterTache}>Ajouter</button>
</div>


<ul className='taches-liste'>
 {taches.map((tache) => (
  <li key={tache.id} className='tache-item'>
    <input type="checkbox" />
    <span>{tache.text}</span>
    <button className='supprime-btn'>Supprimer</button>
  </li>
))}
</ul>

</div>

  );
 }

export default App
