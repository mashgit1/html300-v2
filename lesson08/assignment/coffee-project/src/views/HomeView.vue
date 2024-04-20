<template>
  <!-- Start of template section -->
  <div class="home">
    <!-- Header section -->
    <header>
      <h1>Coffee Project</h1>
      <!-- Images with v-for loop -->
      <img v-for="(image, index) in images" :src="image.src" :alt="image.alt" :key="'image-' + index">
      <!-- Navigation bar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light" v-for="(navItem, navIndex) in navItems" :key="'nav-' + navIndex">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <!-- Navigation links with v-for loop -->
              <li class="nav-item" v-for="(link, linkIndex) in navItem.links" :key="'link-' + linkIndex">
                <router-link :to="link.to">{{ link.text }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- Main section -->
    <main>
      <aside>
        <h2>Overview</h2>
        <p>My project will be a helpful tool for users to navigate the coffee scene and find the best options available.</p> 
        <h3>Site Features:</h3>
        <ul>
          <li>Best Coffee Drink Option</li>
          <li>Coffee Shop Options</li>
        </ul>
      </aside>
      <section class="content">
        <h2>Site Description</h2>
        <p>As an avid coffee drinker, I'm always looking for innovative ways and opportunities where coffee is put to new use. While coffee may be a necessity for many, I want to explore the fun ways that coffee can be found. In many cultures, it is a focal point of connection and social gatherings with cafes and coffee shops being open all throughout the day and night. Its use in American society takes a slightly different route with coffee initially just being seen as being a necessity for providing caffeine to a working individual. With the third and second wave of coffee culture a more exploratory approach is obvious with a focus on high quality beans and flavors.</p>
        <p>My site will explore coffee history and culture to provide this as a resource for others interested and are looking to learn more. It will include the below pages: </p>
        <div class="image-container">
          <img :src="require('../images/coffee-beans-top-view-background.jpg')" alt="coffee beans">
          <ul>
            <li v-for="(page, pageIndex) in pages" :key="'page-' + pageIndex">{{ page }}</li>
          </ul>
        </div>
        <p v-if="loggedIn">Welcome, {{ username }}!</p> <!-- Display welcome message if logged in -->
        <p v-else>Please log in to learn more</p> <!-- Display login message if not logged in -->
      </section>
    </main>
    <!-- Footer section -->
    <footer>
      <!-- Footer navigation bar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <!-- Footer navigation links with v-for loop -->
              <li class="nav-item" v-for="(link, linkIndex) in navItems[0].links" :key="'footer-link-' + linkIndex">
                <router-link :to="link.to">{{ link.text }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>© 2024 Coffee, LLC | Seattle, WA</p>
    </footer>
  </div>
</template>

<script>
// Import any components you need here

export default {
  name: 'HomeView',
  data() {
    return {
      images: [
        { src: '../images/top-view-tasty-coffee-with-coffee-beans.jpg', alt: 'top view coffee with coffee beans' }
      ],
      navItems: [
        {
          links: [
            { text: 'Home', to: '/' },
            { text: 'Images', to: '/about' },
            { text: 'Accordion', to: '/compare' },
            { text: 'Grid System', to: '/drinks' }
          ]
        }
      ],
      pages: [
        'History of coffee in the US',
        'Comparison of coffee culture here and in other areas',
        'Types of coffee drinks found',
        'Coffee shop options'
      ],
      loggedIn: false, 
      username: 'JohnDoe' // Placeholder username
    };
  }
};
</script>