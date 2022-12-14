import Bridegroom from './components/Bridegroom';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import Header from './components/Header';
import RSVP from './components/RSVP';
import Sidebar from './components/Sidebar';
import Where from './components/Where';

function App() {
  return (
    <>
      <Sidebar />
      <div id='oliven-main'>
        <Header />
        <Bridegroom />
        <Countdown />
        <Where />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;
