import './App.css'
import NavBars from './components/NavBars'
import News from './components/News'

function App() {
  return (
    <div>
      <NavBars />
      <News pageSize={6}/>
    </div>
  )
}

export default App