import React from "react"

function Home(props) {
  return (
    <div className="home">
      <div className="home-title">
        <h1>James Wolfe</h1>
      </div>
      <div className="home-text">
        <div className="home-text-left">
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in facilisis elit. Vivamus eget est sed sem pellentesque faucibus. Maecenas pretium lobortis enim. Proin ac euismod urna. Duis tempor eleifend turpis, sed gravida quam luctus ut. Quisque posuere posuere libero et facilisis. Vivamus a molestie ipsum. Aliquam egestas faucibus diam, vel laoreet augue consequat in. Nulla lobortis fringilla arcu, sit amet vulputate orci commodo vitae. In sapien tellus, efficitur id vulputate malesuada, semper at neque.
          </p>
        </div>
        <div className="home-text-right">
          <h2>Skills</h2>
          <p>
            HTML | CSS | Javascript | Ruby on Rails | SQL | PostgreSQL | Heroku | APIs | Figma | Git
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home;
