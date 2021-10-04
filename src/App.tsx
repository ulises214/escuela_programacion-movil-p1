import './App.css';
import { NoticesGrid } from './noticesGrid';
import { Footer } from './shared/components/footer';
import { Header } from './shared/components/header';
import { MainAdd } from './shared/components/mainAdd';
import { MainNoticies } from './shared/components/mainNoticies';
import { ResultsTab } from './shared/components/resultsTab';

function App() {
  return (
    <>
      <Header />
      <MainAdd />
      <ResultsTab className='d-none d-xl-block' />
      <MainNoticies />
      <ResultsTab className='d-block d-xl-none' />
      <NoticesGrid />
      <Footer />
    </>
  );
}

export default App;
