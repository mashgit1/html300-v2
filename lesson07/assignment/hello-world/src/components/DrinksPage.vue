<template>
  <div>
    <header class="text-center">
      <h1>Types of Coffee Drinks</h1>
      <img src="images/top-view-tasty-coffee-with-coffee-beans.jpg" alt="top view coffee with coffee beans" class="img-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item"><router-link to="/src/components/HomePage">Home</router-link></li>
              <li class="nav-item"><router-link to="/src/components/HistoryPage">Images</router-link></li>
              <li class="nav-item"><router-link to="/src/components/ComparisonPage">Accordion</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <main class="container">
      <div class="row">
        <aside class="col-lg-3">
          <h2>Coffee Drink Options</h2>
          <p>After exploring the history of coffee and coffee culture you're now ready to begin picking your drink of choice.</p>
        </aside>
        <section class="col-lg-9">
          <p>Below you will find some common drink options.</p>
          <div class="image-container d-flex align-items-center mb-4">
            <img src="images/couple-enjoying-coffee-weekend.jpg" alt="top view of different coffee drinks" class="img-fluid">
            <ul>
              <li><strong>Drip Coffee:</strong> Ground coffee is added to a brew basket and placed in an automatic coffee machine for this brewing style. Gravity is used to pass water through the grounds, resulting in a traditional cup of coffee.</li>
              <li><strong>Pour Over:</strong> This brewing style is achieved by pouring boiling water slowly through coffee grounds as they sit in a filter basket. The coffee then drips into a single cup, resulting in a potent brew.</li>
              <li><strong>Cold Brew:</strong> For cold brew, coarsely ground coffee is placed in room temperature water and allowed to steep for an extended period of time. This results in a less bitter, highly caffeinated brew.</li>
              <li><strong>Espresso:</strong> Espresso requires an espresso machine which will pass pressurized hot water through a filter containing dark roasted finely ground coffee beans. The force of the water produces a highly concentrated coffee shot. This is the method most commonly used for the base of coffee drinks.</li>
            </ul>
          </div>
        </section>
      </div>
      <section class="row">
        <h2>Sources</h2>
        <ul>
          <li><a href="https://www.webstaurantstore.com/article/397/types-of-coffee-drinks.html">Types of Coffee Drinks</a></li>
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
              <li class="nav-item"><router-link to="/src/components/ComparisonPage">Accordion</router-link></li>
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
  name: 'DrinksPage'
}
</script>