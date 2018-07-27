import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'; //browser based projects

const PlayerAPI = {
  players: [
    { number: 1, name: 'Ben Blocker', position: 'G' },
    { number: 2, name: 'Dave Defender', position: 'D' },
    { number: 3, name: 'Sam Sweeper', position: 'D' },
    { number: 4, name: 'Matt Midfielder', position: 'M' },
    { number: 5, name: 'William Winger', position: 'M' },
    { number: 6, name: 'Fillipe Forward', position: 'F' },
  ],
  all: () => PlayerAPI.players,
  get: id => {
    const isPlayer = p => p.number === id;
    return PlayerAPI.players.find(isPlayer);
  },
};

const FullRoster = () => (
  <div>
    <ul>
      {PlayerAPI.all().map(p => (
        <li key={p.number}>
          <Link to={`/roster/${p.number}`}>{p.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

const Home = () => (
  <div>
    <h3>Welcome!</h3>
  </div>
);

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
);

const Player = props => {
  const player = PlayerAPI.get(parseInt(props.match.params.number, 10));
  if (!player) {
    return <div> Sorry, but the player was not found</div>;
  }

  return (
    <div>
      <h1>
        {player.name} (#{player.number})
      </h1>
      <h2>{player.position}</h2>
    </div>
  );
};

const Roster = () => (
  <div>
    <p>This is a roster page!</p>
    <Switch>
      <Route exact path="/roster" component={FullRoster} />
      <Route path="/roster/:number" component={Player} />
    </Switch>
  </div>
);

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/roster">Roster</Link>
        </li>
        <li>
          <Link to="/schedule">Schedule</Link>
        </li>
      </ul>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/roster" component={Roster} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  </main>
);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
