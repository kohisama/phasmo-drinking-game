import EverybodyRules from './components/EverybodyRules';
import Intro from './components/Intro'
import PlayerRules from './components/PlayerRules';
import Wildcards from './components/Wildcards';
function App() {
  return (
    <div>
      <Intro />
      <PlayerRules />
      <EverybodyRules />
      <Wildcards />
    </div>
  );
}

export default App;