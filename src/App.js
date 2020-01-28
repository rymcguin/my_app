import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
      <Layout>
        <Header className='header-color' title=" " scroll>
          <Navigation>
                <Link to="/">Home</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        {/* <Drawer title="Nav">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer> */}
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
