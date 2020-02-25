import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: [],
      selectedCountry: null
    },
    mounted(){
      this.fetchCountries()
    },
    methods: {
      fetchCountries: function(){
        const request = fetch("https://restcountries.eu/rest/v2/all")
        .then((response) => response.json())
        .then((data) => this.countries = data)
      },
      handleCountrySelect: function(){
      }
    },
    computed: {
      totalPopulation: function(){
        return this.countries.reduce((total, country) => {
          return total += country.population;
        }, 0)
      }
    }
  })
});


// return this.accounts.reduce((total, account) => {
//           return total += account.balance;
//         }, 0)

// Create a computed property that uses this.countries and calculates the total population

// get the index of the country as value for the option tag
