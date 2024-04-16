import css from './App.module.css';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className={css.App}>
      <StatefulGreetingWithPrevState/>
    
    </div>
  );
}

export default App;