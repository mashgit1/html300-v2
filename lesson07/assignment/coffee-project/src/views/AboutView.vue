<template>
  <!-- Start of template section -->
  <div class="about">
    <header>
      <h1>Coffee History</h1>
      <!-- Images with v-for loop -->
      <img v-for="(image, index) in allImages" :src="image.src" :alt="image.alt" class="img-fluid" :key="'image-' + index">
      <!-- Navigation bar -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light" v-for="(navItem, navIndex) in navItems" :key="'nav-' + navIndex">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item" v-for="(link, linkIndex) in navItem.links" :key="'link-' + linkIndex">
                <router-link :to="link.to">{{ link.text }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <!-- Main section -->
    <main class="content">
      <section>
        <aside v-for="(discovery, discoveryIndex) in discoveries" :key="'discovery-' + discoveryIndex">
          <h2>{{ discovery.title }}</h2>
          <p>{{ discovery.description }}</p>
        </aside>
        <div class="image-container">
          <!-- Iterate through images -->
          <img v-for="(image, index) in coffeeImages" :src="image.src" :alt="image.alt" class="img-fluid" :key="'coffee-image-' + index">
        </div>
      </section>
<!-- Background section with v-for loop -->
      <section>
        <h2>{{ coffeeTravels.title }}</h2>
        <p>{{ coffeeTravels.description }}</p>
        <h2>{{ coffeeInUS.title }}</h2>
        <p>{{ coffeeInUS.description }}</p>
      </section>
      <section>
        <aside v-for="(coffeeNow, coffeeNowIndex) in coffeeNows" :key="'coffeeNow-' + coffeeNowIndex">
          <h2>{{ coffeeNow.title }}</h2>
          <p>{{ coffeeNow.description }}</p>
        </aside>
        <div class="image-container">
          <img :src="evolutionOfCoffee.src" :alt="evolutionOfCoffee.alt" class="img-fluid">
          <p>{{ evolutionOfCoffee.description }}</p>
        </div>
      </section>
      <section>
        <h2>{{ evolutionOfCoffeeWaves.title }}</h2>
        <h3 v-for="(wave, waveIndex) in evolutionOfCoffeeWaves.waves" :key="'wave-' + waveIndex">{{ wave.title }}</h3>
        <div class="image-container" v-for="(wave, waveIndex) in evolutionOfCoffeeWaves.waves" :key="'wave-image-' + waveIndex">
          <img v-if="wave.image" :src="wave.image.src" :alt="wave.image.alt" class="img-fluid">
          <p>{{ wave.description }}</p>
        </div>
      </section>
      <section>
        <h2>Sources</h2>
        <ul>
          <li v-for="(source, sourceIndex) in sources" :key="'source-' + sourceIndex"><a :href="source.link">{{ source.text }}</a></li>
        </ul>
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

export default {
  name: 'AboutView',
  data() {
    return {
      images: [
        { src: '/src/images/top-view-tasty-coffee-with-coffee-beans.jpg', alt: 'top view coffee with coffee beans' }
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
      discoveries: [
        { title: 'Discovery of Coffee', description: 'Legend says that coffee was first discovered by an Ethiopian goat herder after he noticed that his goats were strangely energized after eating berries from a tree. They then took the berries and made a drink, realizing that it kept them up at night.' }
      ],
      coffeeImages: [
        { src: 'images/coffee-beans-top-view-background.jpg', alt: 'coffee' },
        { src: 'images/' + this.coffeeSpread.src, alt: this.coffeeSpread.alt },
        { src: 'images/' + this.evolutionOfCoffee.src, alt: this.evolutionOfCoffee.alt },
      ],
      coffeeTravels: { title: 'Coffee Travels to Europe', description: 'By the 17th century, through trade coffee finally made its way to Europe with many fearing this new dark beverage that had come from the East. Through this controversy, the Pope intervened and after finally tasting it, its popularity finally spread. Coffee began to replace many other drinks such as alcohol in the mornings, due to its ability to allow the drinker to be energized and alert throughout the day.' },
      coffeeInUS: { title: 'Coffee In the US', description: 'In the mid-1600s, coffee was brought to New York and although many coffee houses started to appear, tea was still superior among the British. After events of the Boston Tea Party, coffee was forever stamped in American culture.' },
      coffeeNows: [
        { title: 'Coffee Now', description: 'Coffee nowadays can be found in many forms and methods. We\'ll share the evolution of coffee and how it brought us where we are today.' }
      ],
      evolutionOfCoffee: {
        src: 'images/ingredients-making-coffee-flat-lay.jpg',
        alt: 'ingredients for coffee',
        description: 'Coffee became a staple in American culture especially during the Industrial Revolution which is when the first wave of coffee can be seen. The last few decades have been a period of growth and evolution for the global coffee industry.'
      },
      evolutionOfCoffeeWaves: {
        title: 'Evolution of Coffee: The Three Waves',
        waves: [
          { title: 'First Wave', description: 'The first wave of coffee is seen as the lowest quality and is known as commodity coffee. The beans are artificially or naturally flavored, primarily pre-ground offerings, and the coffee is dark and bitter.' },
          { title: 'Second Wave', description: 'The second wave is largely focused on the experience and can be seen in brands like Starbucks and Caribou Coffee that revolutionized cafe culture in the United States in the late 1900s which introduced coffee lovers to a wider variety of coffee experiences.' },
          { title: 'Third Wave', description: 'Third wave coffee, commonly known as specialty coffee, evolved from a small community in the 1980s that was highly focused on the coffee beans. The coffee has specific flavor notes (e.g., honey sweetness, rose aromatics, and orange acidity), lighter roast profiles, latte art, single origin beans, and more. This wave in now the largest coffee sub-industry in the US.', image: { src: 'images/close-up-cappuccino-coffee-with-art-latte-wooden-table.jpg', alt: 'latte on table' } }
        ]
      },
      sources: [
        { text: 'The History of Coffee', link: 'https://www.ncausa.org/about-coffee/history-of-coffee' },
        { text: 'The Differences Between 1st, 2nd, and 3rd Wave Coffee', link: 'https://www.drivencoffee.com/blog/coffee-waves-explained/' }
      ]
    };
  },
  computed: {
    allImages() {
      const allImages = [];
      allImages.push(...this.images);
      allImages.push(...this.coffeeImages);
      allImages.push({ src: this.evolutionOfCoffee.src, alt: this.evolutionOfCoffee.alt });
      allImages.push({ src: this.coffeeSpread.src, alt: this.coffeeSpread.alt });
      return allImages;
    }
  }
};
</script>