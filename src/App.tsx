import FeedbackBtn from './components/feedback';
import Main from './components/main';
import Navigation from './components/navigations/navigation';
import NavigationXl from './components/navigations/navigationxl';
import './index.css';

function App() {
  return (
    <div>
      <FeedbackBtn />
      <Navigation />
      <NavigationXl />
      <Main />
    </div>
  );
}

export default App;
