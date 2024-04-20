<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Images</router-link>
      <router-link to="/compare">Accordion</router-link>
      <router-link to="/drinks">Grid System</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// Variables
$transition-duration: 0.3s;
$hover-scale-factor: 1.1;

// Transition mixin
@mixin transition($properties...) {
  transition: $properties $transition-duration ease-in-out;
}

// Hover effect mixin
@mixin hover-scale($factor) {
  &:hover {
    transform: scale($factor);
  }
}
/* General styling */
body {
  font-family: Arial, sans-serif;
}

/* Header styles */
header {
  text-align: center;
  padding: 20px;
}

header img {
  width: 75%;
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}

/* Container for the header elements */
.header-container {
  display: flex;
  flex-direction: column;
  align-items: center; 
}

/* Structure for nav menu */
nav {
  text-align: center;
  margin-top: 20px;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
}

/* Formatting for nav menu items */
nav ul li {
  background-color: #eae2d5f0;
  border: 1px solid #746e57f0;
  border-radius: 5px;
  color: rgba(249, 246, 246, 0.776);
  margin: 5px; 
  flex: 1 0 auto; 
  padding: 15px;
  @include transition(transform); // Apply transition to transform property
  @include hover-scale($hover-scale-factor); // Apply hover effect to scale the item
}

/* Implement nav hover color */
nav ul li:hover {
  background-color: #e9e5e5; 
  transform: scale(1.1); 
}

aside {
    background-color: #f0f0f0;
  }

/* Placing image beside text */
.image-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
  padding: 5em;
  background-color: rgb(193, 182, 163);
}

/* Ensure image does not exceed container width */
.image-container img {
  max-width: 35%;
  margin-right: 20px; 
}

/* Formatting for footer */
footer {
  text-align: center;
  padding: 1em;
  background-color: #333;
  color: #fff;
}

/* Media query for responsive layout */
@media screen and (max-width: 768px) {
  main {
    grid-template-columns: 1fr; 
  }

  aside {
    grid-column: 1 / -1;
    margin-bottom: 20px; 
  }
}
</style>
