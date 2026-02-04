import {useState} from 'react';
import './App.css'


function App() {
const [taches,setTaches]=useState([
{id:1,text:'Apprendre React',completed: false},
{id:2,text:'Apprendre Flutter',completed: false},
]);

  return (

<div className='app'>

<h1>Todo List</h1>
<div className='tache-input'>
  <input type="text" placeholder="Ajouter une tâche..." />
  <button>Ajouter</button>
</div>

{/*Création de l'enfant liste en dur */}

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
