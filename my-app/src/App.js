import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className={css.App}>
      <StatefulGreeting greeting="i'm a stateful class component" name="Kim" age="32"/>
    
    </div>
  );
}

export default App;