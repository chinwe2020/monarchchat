import './App.css';
import '../..';


function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>

      <Switch>
        <Route exact path='/' render={() => <><HomePage /> </>} />
        <Route exact path='/profile' render={() => <ProfilePage />} />
      </Switch>
    
    <div className="App">
      <p>hello world</p>
    </div>
  );
}

export default App;
