import Card from "./components/Card"
import Nav from "./components/Nav"
import data from "./data.js"
function App() {
  const all = data.map(function(d) {
      return (<Card key = {d.id} item = {d}/>

      )
  })
  return (
    <div >
      <Nav/>
      <div className="card">
        {all}
       
      </div>
    </div>
  );
}

export default App;
