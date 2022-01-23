import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import Header from './Header'
import FeaturedContent from './FeaturedContent'

function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedContent />
      <FeaturedContent />
      <FeaturedContent />
      <FeaturedContent />
      <FeaturedContent />
    </div>
  );
}

export default App;
