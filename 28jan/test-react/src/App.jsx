
import './App.css'
import Data from './data'
import Footer from './footer'
import Header from './header'

// const lst = <ol>
//   <li>C#</li>
//   <li>Python</li>
//   <li>SQL</li>
//   <li>CSS</li>
// </ol>

function App() {

  return (
    <>
      {/* <h1>Our Course {lst}</h1> */}
      {/* <h1>Application Form</h1>
      Enter Roll No : <input type='text'/>
      <br/>
      Enter Subject : <input type='text'/>
      <br/>
      Enter Subject:
      <select>
        <option value="">-- Choose a Subject --</option>
        <option value="C#">C#</option>
        <option value="Python">Python</option>
        <option value="SQL">SQL</option>
        <option value="CSS">CSS</option>
      </select>
      <br/>
      Comments:
      <textarea rows="4" cols="50" placeholder="Enter your comments here"/>
      <br />*/}
      
      <Header/>
      <Footer/>
      <Data/>
    </>
  )
}

export default App
