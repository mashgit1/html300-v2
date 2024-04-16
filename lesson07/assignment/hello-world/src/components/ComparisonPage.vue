<template>
  <div>
    <header>
      <h1>Comparison of Coffee Cultures</h1>
        <img src="images/top-view-tasty-coffee-with-coffee-beans.jpg" alt="top view coffee with coffee beans">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><router-link to="/src/components/HomePage">Home</router-link></li>
                    <li class="nav-item"><router-link to="/src/components/HistoryPage">Images</router-link></li>
                    <li class="nav-item"><router-link to="/src/components/DrinksPage">Grid System</router-link></li>
                </ul>
              </div>
            </div>
          </nav>
    </header>
    <main>
        <aside>
            <h2>Coffee Cultures</h2>
            <p>Now that you know a little more about the origin of coffee, you can now explore the different coffee cultures around the world.</p>
        </aside>
        <section class="content">
            <h2>United States</h2>
            <p>Coffee in America is about convenience, accessibility, and speed. You will typically find Americans drinking coffee at home or grabbing a cup quickly before heading into the office to begin their workday. Although the craft coffee culture has very much taken off in America, even those craft cocktails are often taken to go.</p>
            <p>This is begining to change with the third wave of coffee. See more about the three waves of coffee below.</p>
            <div id="coffeeWavesAccordion">
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#firstWaveCollapse">
                            First Wave
                        </button>
                    </h3>
                    <div id="firstWaveCollapse" class="accordion-collapse collapse show">
                        <div class="accordion-body">
                            <p>The first wave of coffee is seen as the lowest quality and is known as commodity coffee. The beans are artificially or naturally flavored, primarily pre-ground offerings, and the coffee is dark and bitter. <a href="https://www.drivencoffee.com/blog/coffee-waves-explained/" data-bs-toggle="tooltip" title="Click here to learn more about First Wave Coffee">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#secondWaveCollapse">
                            Second Wave
                        </button>
                    </h3>
                    <div id="secondWaveCollapse" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <p>The second wave is largely focused on the experience and can be seen in brands like Starbucks and Caribou Coffee that revolutionized cafe culture in the United States in the late 1900s which introduced coffee lovers to a wider variety of coffee experiences. <a href="https://www.drivencoffee.com/blog/coffee-waves-explained/" data-bs-toggle="tooltip" title="Click here to learn more about Second Wave Coffee">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#thirdWaveCollapse">
                            Third Wave
                        </button>
                    </h3>
                    <div id="thirdWaveCollapse" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            <p>Third wave coffee, commonly known as specialty coffee, evolved from a small community in the 1980s that was highly focused on the coffee beans. The coffee has specific flavor notes (eg. honey sweetness, rose aromatics, and orange acidity), lighter roast profiles, latte art, single origin beans, and more. This wave in now the largest coffee sub-industry in the US. <a href="https://www.drivencoffee.com/blog/coffee-waves-explained/" data-bs-toggle="tooltip" title="Click here to learn more about Third Wave Coffee">Learn more</a></p>
                        </div>
                    </div>
                </div>
            </div>            
            <h2>Outside of the US</h2>
            <div class="image-container">
            <img src="images/world-map-made-coffee-white-background.jpg" alt="workd map of coffee">
            <p>In most other parts of the world, coffee culture stems from connection. People gather in groups or at home to socialize with friends and family over a cup of coffee. Coffee culture around the world thrives on connection and it can be seen in cafes in Italy, Turkey, Egypt, Japan, and many other regions.</p>
            </div>
        </section>
        <section class="content">
            <h2>Sources</h2>
        <ul>
            <li><a href="https://theculinarytravelguide.com/coffee-culture-in-the-united-states-and-europe/">Coffee Culture in the United States and Europe</a></li>
            <li><a href="https://www.taylorlane.com/blogs/read/coffee-culture-around-the-world">COFFEE CULTURE AROUND THE WORLD</a></li>
    
        </ul>
           </section>
    </main>
       <footer>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item"><router-link to="/src/components/HomePage">Home</router-link></li>
              <li class="nav-item"><router-link to="/src/components/HistoryPage">Images</router-link></li>
              <li class="nav-item"><router-link to="/src/components/DrinksPage">Grid System</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
      <p>© 2024 Coffee, LLC | Seattle, WA</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ComparisonPage'
}
</script>