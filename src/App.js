import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super ();

      this.state = {
      links: ['SERVICES', 'PORTFOLIO', 'ABOUT', 'TEAM', 'CONTACT'],
      showMenu: false
    }
  }

  handleClick = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  render() {
    let map = this.state.links.map((element, index) => {
      return <p key={index}>{element}</p>
    })
    return (
      <div className="App">
        <nav>
          <div className='navContainer'>
            <div className='logoContainer'><h3>Start Bootstrap</h3></div>
            <div className='linkContainer'>{map}</div>
            <div className='hamburgerBtn'
            onClick={() => this.handleClick()}>
              <span>MENU</span>
              <img className='hamburgerIcon'
              src='https://cdn2.iconfinder.com/data/icons/clean-minimal-set/16/open-menu-01-512.png'
              alt='hamburger icon'></img>
            </div>
          </div>
          {this.state.showMenu && <div className='hamburgerMenu'>
            <div className='hamburgerLinks'>
            {map}
            </div>
          </div>}
        </nav>
        <main>
          <div className='welcome'>
            <h2>Welcome To Our Studio!</h2>
            <h1>IT'S NICE TO MEET YOU</h1>
          <button className='tellMeMoreBtn'>TELL ME MORE</button>
          </div>
          <div className='serviceSection'>
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='services'>
              <div className='service'>
                <div className='serviceIcon'></div>
                <h2>E-Commerce</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className='service'>
                <div className='serviceIcon'></div>
                <h2>Responsive Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              <div className='service'>
                <div className='serviceIcon'></div>
                <h2>Web Security</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
              </div>
              </div>
            </div>
        </main>
      </div>
    );
  }
}

export default App;
