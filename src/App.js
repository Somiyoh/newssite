import './App.css'
import NavBars from './components/NavBars'
import News from './components/News'

function App() {
  return (
    <div>
      <NavBars />
      <News pageSize={6} country="us" category="sports"/>
    </div>
  )
}

export default App