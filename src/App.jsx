import './App.css'
import Header from './components/header/header'
import { MainContext } from './context/MainContext'

const App = () => {
  const globalVar = {};

  return (
    <MainContext.Provider value={{
      globalVar
    }}>
      <div className="App">
        <Header />
      </div>
    </MainContext.Provider>
  )
}

export default App;