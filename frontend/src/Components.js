import React, { useState } from 'react';

// Header Component
export const Header = () => {
  return (
    <div className="header-container">
      <div className="header-top">
        <div className="container">
          <div className="user-info">
            Welcome Guest
          </div>
        </div>
      </div>
      <div className="header-nav">
        <div className="container">
          <div className="logo">
            <a href="/" className="logo-link">webDiplomacy</a>
          </div>
          <nav className="nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/forum" className="nav-link">Forum</a>
            <a href="/login" className="nav-link">Log on</a>
            <a href="/register" className="nav-link">Register</a>
            <a href="#" className="nav-link">Help</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

// Home Page Component
export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        {/* Welcome Section */}
        <div className="welcome-section">
          <div className="welcome-header">
            <h2>Welcome to webDiplomacy!</h2>
          </div>
          <div className="main-game-section">
            <div className="game-promo">
              <p className="promo-text">Click here to start a new game of webdiplomacy against AI opponents!</p>
            </div>
            <div className="main-map-container">
              <img 
                src="https://images.unsplash.com/photo-1613236213658-ec84c1e85d1f" 
                alt="Diplomacy Game Map" 
                className="main-map"
              />
              <div className="map-overlay">
                <div className="logo-overlay">webDiplomacy</div>
              </div>
            </div>
            <div className="game-description">
              <p>A web-based adaptation of the classic board game of negotiation, Diplomacy. Combining the elements of strategy and socializing essential to the face-to-face boardgame, webDiplomacy.net provides an exciting, browser-based experience that's easy to learn but hard to master. The game plays in 30 minute turns, with each player getting 5 minutes to finalize their moves. Diplomacy is one of the most popular board games, and is enjoyed by millions of people across the world.</p>
              <p>
                <a href="#" className="register-link">Register now!</a>
              </p>
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <div className="intro-section">
          <h3>Intro to webDiplomacy</h3>
          <p className="intro-text">A quick guide to playing Diplomacy</p>
          
          <div className="tab-section">
            <div className="tabs">
              <button className="tab active">The Basics</button>
              <button className="tab">Advanced Tactics</button>
              <button className="tab">Further Learning</button>
            </div>
          </div>

          {/* The Basics Section */}
          <div className="basics-content">
            <h4 className="section-title">The Basics</h4>
            <p>The objective of Diplomacy is to be the first nation to take half of the supply centers in the game. To accomplish this, you can move your units around the board, fighting to claim other players' supply centers as your own. But unlike major of real-time strategy games, you can't simply overwhelm an opponent with a large army - the game is a lot more subtle than that. You'll need to convince other players to help you, and to make sure they don't gang up on you. Most units can fight with the most supply centers.</p>
            
            <p>You can recognize supply centers by the markers placed on them that you are here:</p>
            
            <div className="map-example">
              <img 
                src="https://images.pexels.com/photos/7150643/pexels-photo-7150643.jpeg" 
                alt="Diplomacy Strategy Example" 
                className="example-map"
              />
            </div>
            
            <p>In this example, the owner of each of these centers is shown by the color. Diplomacy may also be referred to as 'Dip' and the other six players on the classic Diplomacy map are represented with a different color.</p>
            
            <div className="game-mechanics">
              <h5>Units</h5>
              <p>When you begin a game, and when you place new supply centers, you will gain new pieces, or units. Units can be fleets or armies. Only fleets can enter Water areas, and only armies can usually enter Land areas (some special cases exist around Denmark and Constantinople, most notably). A fleet moves one water area or coast, or one land area if it's along a coast. Land units can only move to adjacent land areas.</p>
              
              <div className="map-example">
                <img 
                  src="https://images.pexels.com/photos/7150646/pexels-photo-7150646.jpeg" 
                  alt="Unit Movement Example" 
                  className="example-map"
                />
              </div>
              
              <p>In order to build armies the map and place supply centers, units can be attacked from units one space away. For an attack to be successful against a unit for survival, you can attack from multiple units simultaneously. Attacking units don't move; they just attack from a distance if it was the owner's goal, meaning you can either proceed to the area they were trying to attack, or if there were no challenges, A unit forced to retreat.</p>
              
              <p>Support is the most important action in Diplomacy, for offense or defense. Units can provide support for units in adjacent areas, and receiving support from more supply centers, you can retreat/move to and adjacent square. If a unit is attacked and forced to retreat.</p>
            </div>

            {/* More Variants */}
            <div className="variants-section">
              <h5>More</h5>
              <p>While here, the game is focused on winning in Europe. There is a variant supporting diplomacy, but it has been most popular in our years. Our variant allows Russia to be slightly more options than others, and is well supported by another variant.</p>
              
              <div className="map-example">
                <img 
                  src="https://images.unsplash.com/photo-1656686631034-e88d4fbde1e3" 
                  alt="Europe Variant" 
                  className="example-map"
                />
              </div>
            </div>

            {/* Colonial Variant */}
            <div className="colonial-section">
              <h5>Colonial</h5>
              <p>Colonial one can transport armies across the ocean. This is useful in creating a strong set of fleets can also significantly manage the territories it can move through, across the land around the Mediterranean. The most important implication is learning to ensure that proper management of Colonial diplomacy is essential, using the advantage to control fleets and armies.</p>
              
              <div className="map-example">
                <img 
                  src="https://images.unsplash.com/photo-1608189241326-a256baadcdf1" 
                  alt="Colonial Variant" 
                  className="example-map"
                />
              </div>
            </div>
          </div>

          {/* Advanced Tactics Section */}
          <div className="advanced-content">
            <h4 className="section-title">Advanced Tactics</h4>
            <p>As you become more experienced, you can lead and move across land territories, and fleets can hold and move on coastal and sea territories, as well as convey armies across the sea. However, the key to successfully overseeing other supply centers is to balance your power to avoid becoming the only target. This involves studying your opponents, understanding their goals and weaknesses, and building agreements for mutual defense. Don't forget, winning Diplomacy is not just about military might, but also about politics, psychology, and cooperation.</p>
            
            <div className="advanced-tactics">
              <h5>Bouncing Moving Units</h5>
              <p>If a supported unit tries to move through more countries without support from another unit, the unit trying to move will remain in its current position (it won't get to move).</p>
              
              <div className="map-example">
                <img 
                  src="https://images.unsplash.com/photo-1667932242848-640b18bd4a45?ixlib=rb-4.0.3" 
                  alt="Advanced Tactics" 
                  className="example-map"
                />
              </div>
              
              <h5>Attacking Occupied Centers</h5>
              <p>While not as strategic than pure attack, a unit that is holding an occupied center is set that it is attacking an adjacent target from an unit, attacking for timing all the conquer and as time is important in attack.</p>
              
              <h5>Cutting Diplomacy and Supplies</h5>
              <p>Along with trying to control things by controlling everything, their supply lines try to cut others allies alternatively on the side trying to disperse. This game takes a lot of analysis to predict.</p>
              
              <h5>Support Move</h5>
              <p>When a military unit is doing a move, and takes direct to another territory, this is one kind of way to practice combatting effectively in Diplomacy, and will helping reinforcement of this method.</p>
              
              <div className="map-example">
                <img 
                  src="https://images.unsplash.com/photo-1608189241326-a256baadcdf1" 
                  alt="Support Move Example" 
                  className="example-map small-map"
                />
              </div>
              
              <h5>Support Hold</h5>
              <p>While supporting holding a unit means, a unit stands by near front of unit from in it, but a unit there is reinforcement of this support, if one is under attack. This is helpful option if you are in turn and allied with another country.</p>
              
              <div className="map-example">
                <img 
                  src="https://images.unsplash.com/photo-1656686631034-e88d4fbde1e3" 
                  alt="Support Hold Example" 
                  className="example-map small-map"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <h4>Users Logged on (in the game forum / on the game forum)</h4>
              <p>Playing Game: 4 - Forum: 20</p>
            </div>
            <div className="stat-item">
              <h4>Recent Players</h4>
              <p>Finished Games: All - Autumn 2024 - Active 2024 - Greatest points: Recent</p>
            </div>
            <div className="stat-item">
              <h4>Joining Games</h4>
              <p>Game ID 1 - Autumn 2024 - 3 players</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Game Board Component
export const GameBoard = () => {
  return (
    <div className="game-board">
      <div className="container">
        <div className="board-message">
          <p>You haven't specified a game to view, please go back to the game listings and choose one.</p>
        </div>
        <div className="game-stats">
          <p>Finished Games: All - Autumn 2024 - 3 games</p>
          <p>Active Games: All - Autumn 2024 - 4 games - Current games: Recent</p>
        </div>
        <div className="game-list">
          <h3>Available Games</h3>
          <div className="game-item">
            <h4>Game #12345 - Classic Diplomacy</h4>
            <p>Status: Waiting for players (4/7)</p>
            <p>Phase: Spring 1901</p>
            <button className="join-btn">Join Game</button>
          </div>
          <div className="game-item">
            <h4>Game #12346 - Colonial Variant</h4>
            <p>Status: In Progress</p>
            <p>Phase: Fall 1902</p>
            <button className="spectate-btn">Spectate</button>
          </div>
          <div className="game-item">
            <h4>Game #12347 - Modern Diplomacy</h4>
            <p>Status: Finished</p>
            <p>Winner: Germany</p>
            <button className="review-btn">Review Game</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Forum Component
export const Forum = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  
  const forumTopics = [
    {
      id: 1,
      title: "New Player Questions",
      posts: 127,
      lastPost: "2 hours ago",
      author: "DiplomacyNewbie"
    },
    {
      id: 2,
      title: "Strategy Discussion",
      posts: 89,
      lastPost: "4 hours ago", 
      author: "StrategicMaster"
    },
    {
      id: 3,
      title: "Bug Reports",
      posts: 45,
      lastPost: "1 day ago",
      author: "WebMaster"
    },
    {
      id: 4,
      title: "Game Analysis",
      posts: 234,
      lastPost: "3 hours ago",
      author: "GameAnalyst"
    }
  ];

  return (
    <div className="forum">
      <div className="container">
        <h2>webDiplomacy Forum</h2>
        <div className="forum-stats">
          <p>Total Topics: 89 | Total Posts: 1,247 | Active Users: 156</p>
        </div>
        
        <div className="forum-topics">
          <div className="topic-header">
            <div className="topic-title">Topic</div>
            <div className="topic-posts">Posts</div>
            <div className="topic-last">Last Post</div>
          </div>
          
          {forumTopics.map(topic => (
            <div key={topic.id} className="topic-row" onClick={() => setSelectedTopic(topic)}>
              <div className="topic-title">
                <h4>{topic.title}</h4>
                <span className="topic-author">Started by {topic.author}</span>
              </div>
              <div className="topic-posts">{topic.posts}</div>
              <div className="topic-last">{topic.lastPost}</div>
            </div>
          ))}
        </div>

        {selectedTopic && (
          <div className="topic-detail">
            <h3>{selectedTopic.title}</h3>
            <div className="posts">
              <div className="post">
                <div className="post-author">
                  <strong>{selectedTopic.author}</strong>
                  <span className="post-date">Posted 2 days ago</span>
                </div>
                <div className="post-content">
                  <p>Welcome to the discussion about {selectedTopic.title.toLowerCase()}. This is a sample post to demonstrate the forum functionality.</p>
                </div>
              </div>
              <div className="post">
                <div className="post-author">
                  <strong>ExperiencedPlayer</strong>
                  <span className="post-date">Posted 1 day ago</span>
                </div>
                <div className="post-content">
                  <p>Great topic! I have some thoughts to share about this subject...</p>
                </div>
              </div>
            </div>
            <button className="back-btn" onClick={() => setSelectedTopic(null)}>Back to Topics</button>
          </div>
        )}
      </div>
    </div>
  );
};

// Login Page Component
export const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login functionality would be implemented here');
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-form-container">
          <h2>Log on to webDiplomacy</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-btn">Log On</button>
          </form>
          <div className="login-links">
            <p><a href="/register">Don't have an account? Register here</a></p>
            <p><a href="#">Forgot your password?</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Register Page Component
export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Registration functionality would be implemented here');
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="register-form-container">
          <h2>Register for webDiplomacy</h2>
          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="register-btn">Register</button>
          </form>
          <div className="register-links">
            <p><a href="/login">Already have an account? Log in here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};