 import React, { useState } from 'react'
import './App.css'
// { ./ } -->entry to src folder
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (email === "" || password === "") {
      setMessage("Please enter both email and password.");
    } else {
      setMessage(`Logged in as ${email}`);
    }
  };

  return (
    <>
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {message && <p>{message}</p>}
        </form>
        <hr />
        <div>
          <h2>Weather Station</h2>
          <table border="1">
            <thead>
              <tr>
                <th>Station</th>
                <th colSpan="2">Temperature</th>
                <th>Humidity</th>
                <th>Weather</th>
              </tr>
              <tr>
                <th></th>
                <th>Max</th>
                <th>Min</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USA</td>
                <td>24</td>
                <td>19</td>
                <td>60%</td>
                <td>cloudy</td>
              </tr>
              <tr>
                <td>Germany</td>
                <td>5</td>
                <td>-1</td>
                <td>70%</td>
                <td>Rainy</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <div>
   
    <h2>Classification</h2>
    <ol type="a">
        
        <li>Animals
            <ul>
                
                <li>Mammals
                    <ol type="a">
                        <li>Lion</li>
                        <li>Elephant</li>
                        <li>Whale</li>
                    </ol>
                </li>
                
                <li>Reptiles
                    <ul type="square">
                        <li>Snake</li>
                        <li>Turtle</li>
                        <li>Crocodile</li>
                    </ul>
                </li>
            </ul>
        </li>
        
        <li>Plants
            <ul>
                
                <li>Flowering
                    <ol type="a">
                        <li>Rose</li>
                        <li>Tulip</li>
                        <li>Sunflower</li>
                    </ol>
                </li>
               
                <li>Non-flowering
                    <ul type="square">
                        <li>Fern</li>
                        <li>Moss</li>
                        <li>Algae</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ol>
</div>
<hr />
          <div>
            
            <h2>Nested List</h2>
            <ol>
              <li>chocolates
                <ul type="square">
                  <li>dairy milk</li>
                  <li>bournvile</li>
                  <li>munch</li>
                </ul>
              </li>
              <li>Games
                <ul>
                  <li>cricket</li>
                  <li>hockey</li>
                  <li>football</li>
                </ul>
              </li>
              <li>fruit
                <ul type="circle">
                  <li>apple</li>
                  <li>orange</li>
                  <li>grapes</li>
                </ul>
              </li>
            </ol>
          </div>
          <hr />
          <div>
  <h2>STUDENT & EMPLOYEE DATA LIST</h2>
  <table border="1">
    <thead>
      <tr>
        <th colspan="2">STUDENT DATA</th>
        <th colspan="2">EMPLOYEE DATA</th>
      </tr>
      <tr>
        <th>NAME</th>
        <th>CLASS</th>
        <th>NAME</th>
        <th>SALARY</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>RAVI</td>
        <td>IX</td>
        <td>SRINIVASA RAO</td>
        <td>20,000</td>
      </tr>
      <tr>
        <td>GANESH</td>
        <td></td>
        <td>RAMA RAO</td>
        <td></td>
      </tr>
      <tr>
        <td>VIJAY</td>
        <td>VII</td>
        <td>CHALAPATHI RAO</td>
        <td>18,500</td>
      </tr>
    </tbody>
  </table>
</div>
<br /><hr />
          <div>
            <p><b>Fruits</b></p>
            <ol type="disc">
              <li>Mango</li>
              <li>orange</li>
            </ol>
            <p><b>vegetables</b></p>
            <ol type="disc">
              <li>Cabbage</li>
              <li>Capsicum</li>
              <ol type="disc">
              <li>green Capsicum</li>
              <li>red Capsicum</li>
              <li>yellow Capsicum</li>
            </ol>
            </ol>
          </div>
          <hr />
          <div>
            <h2>Chocolate</h2>
            <div>
              <p><b>Chocolate</b></p>
              <ol type="1">
                <li>Dairy Milk</li>
                <li>Bournville</li>
                <li>Munch</li>
              </ol>
            </div>
            <div>
              <p><b>Games</b></p>
              <ul type="disc">
                <li>Cricket</li>
                <li>Hockey</li>
                <li>Football</li>
              </ul>
            </div>
            <div>
              <p><b>Fruit</b></p>
              <ul type="disc">
                <li>Apple</li>
                <li>Orange</li>
                <li>Grapes</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <p><b>1. Cars</b></p>
        <p><b>2. Bikes</b></p>
        <ul type="disc">
          <li>ElectricBike</li>
          <li>SuperBike</li>
          <li>Bike</li>
        </ul>
        <p><b>3. plane</b></p>
        <ul type="disc">
          <li>Commercial Plane</li>
          <li>Private Jet</li>
          <li>Cargo Plane</li>
        </ul>

     

export default App


      <h1 className="heading">React class introducing</h1>
      <p className="paragraph">This is my first React project.</p>
      
   
   </div>
    </>
  );
}
export default App;