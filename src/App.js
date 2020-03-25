import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{height: '300px', position: 'relative'}}>
  
      <Layout fixedHeader>
        <Header className='header-color'>
          <Navigation className= 'header-tabs'>
                <Link to="/" className= 'header-tab1'>Home</Link>
                {/* <Link to="/aboutme">About Me</Link> */}
                <Link to="/resume" className= 'header-tab2'>Resume</Link>
                <Link to="/contact" className= 'header-tab3'>Contact</Link>
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
