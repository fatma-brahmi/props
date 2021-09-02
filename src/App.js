
import './App.css';
import ListeProfile from './profil/component/ListeProfile';

const liste =[
  {
    name: 'Fatma Brahmi', 
    bio :"work work work",
    profession:"Developpeur",
  }
]
function App() {
  return (
    <div className="App">
     <ListeProfile profil={liste} name='ameni'/>
</div>
 );
 }
 
export default App;
