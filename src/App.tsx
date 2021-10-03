import './App.css';
import { Header } from './shared/components/header';

function App() {
  return (
    <>
      <Header></Header>
      {Array(32)
        .fill(1)
        .map((e, i) => (
          <h3 key={i}>{e}</h3>
        ))}
    </>
  );
}

export default App;
