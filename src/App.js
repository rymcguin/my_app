import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './pages/main';
import { Link } from 'react-router-dom';

const particlesOptions = {
  particles: {
    number: {
      value: 250
    },
    size: {
      value: 3
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  }
}

function App() {
  return (
    <div className="App">
       <Particles
          className='particles'
          params={particlesOptions}
        />
      <Layout fixedHeader>
        <Header className='header-color'>
          <Navigation className= 'header-tabs'>
                <Link to="/" className= 'header-tab1'>Home</Link>
                <Link to="/resume" className= 'header-tab2'>Resume</Link>
                <Link to="/projects" className= 'header-tab3'>Projects</Link>
                <Link to="/contact" className= 'header-tab4'>Contact</Link>
          </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
