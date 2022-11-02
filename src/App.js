import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Facebook from './components/Facebook';
import Random from './components/Random';
import BoxColor from './components/BoxColor';

 
function App() {
  return (
    <div className="App">
    <div>
    <h3>ID CARD</h3>
    <IdCard
      picture="https://randomuser.me/api/portraits/men/44.jpg"
      lastName='Doe'
      firstName='John'
      gender='male'
      height={178}
      birth={"1992-07-14"}
    />
    </div>
<br></br>
    <div>
    <IdCard
      lastName='Delores '
      firstName='Obrien'
      gender='female'
      height={172}
      birth={"1988-05-11"}
      picture="https://randomuser.me/api/portraits/women/44.jpg"
    />
    </div>

<br></br>
    
    <div>
    <h3>GREETING</h3>
    <Greetings lang="de">Ludwig</Greetings>
    <Greetings lang="fr">François</Greetings>
    </div>

<br></br>

    <div>
    <h3>RANDOM NUMBER</h3>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>
    </div>

    <br></br>

    <div>
    <h3>BOX BoxColor</h3>
    <BoxColor r={255} g={0} b={0} />
    <BoxColor r={128} g={255} b={0} />
    </div>



   </div>
  );
}
 
export default App;


// <Facebook />
// <Greetings />