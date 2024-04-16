import css from './App.module.css';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';

function App() {
  return (
    <div className={css.App}>
      <StatefulGreetingWithCallback greeting="i'm a stateful class component" name="Kim" age="32"/>
    
    </div>
  );
}

export default App;