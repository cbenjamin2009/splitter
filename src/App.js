import logo from './logo.svg';
import './App.css';
import Results from './Components/Results';
import Input from './Components/Input'
import Button from './Components/Button'
import {useState, useEffect} from 'react'

function App() {
  const [bill, setBill] = useState(0)
  const [percentTip, setPercentTIp] = useState(15)

  const tipAmount = (amount) => {
    setPercentTIp(amount)
    console.log(amount)
  }
 function handleBillChange(e) {
  // e.preventDefault();
  console.log(e.target.value)
   setBill(e.target.value);
 }

  return (
    <div className="App">
      <header className="App-header">
        {/* Put logo here */}
      </header>
      {/* Container */}
      <div className="container">
        <div className="left-container">
          <div className="billAmount">
            <label htmlFor="billAmount">Bill</label>
            <input value={bill} onChange={handleBillChange} name="billAmount" id="billTextBox" />
          </div>
          <div className="tip-percent">
            <label>Select TIp %</label>
            <Button name='fivepercent' value='5%' classStyle='tipButton active'/>
            <Button  name='tenpercent' value='10%' classStyle='tipButton active'/>
            <Button  name='fifteenpercent' value='15%' classStyle='tipButton active'/>
            <Button  name='twentyfivepercent' value='25%' classStyle='tipButton active'/>
            <Button  name='fiftypercent' value='50%' classStyle='tipButton active'/>
            <Button name='custompercent' value='Custom' classStyle='tipButton active'/>
          </div>

          <div className="peopleAmount">
            <label htmlFor="peopleAmount">Number of People</label>
            <input type="number" name="peopleAmount" id="peopleTextBox" value="2"/>
          </div>

        </div>
        <div className="right-container">
          <Results />
          <Button name="reset" value="Reset" classStyle='resetButton' />
        </div>
      </div>
    </div>
  );
}

export default App;
