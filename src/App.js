import React, { Component } from "react";
import Recipe from "./components/Recipe";

import "./App.css";

class App extends Component {
  state = {
    originalRecipes: [
      {
        name: "Semolina and saffron dumplings",
        ingredients: [
          "milk",
          "garlic",
          "saffron",
          "semolina",
          "parmesan",
          "egg",
          "mint"
        ],
        image:
          "https://716f24d81edeb11608aa-99aa5ccfecf745e7cf976b37d172ce54.ssl.cf1.rackcdn.com/semolina-and-saffron-dumplings-with-1266199l1.jpg",
        iframeUrl:
          "https://www.eatyourbooks.com/library/recipes/1266199/semolina-and-saffron-dumplings-with"
      },
      {
        name: "Scallop and corn gyoza",
        ingredients: [
          "cabbage",
          "chives",
          "scallops",
          "ginger",
          "clove",
          "soy sauce",
          "sesame",
          "sugar"
        ],
        image:
          "https://images.food52.com/EgbKGWHhyLn2lCs1IudaGMPzSRE=/1320x880/filters:format(webp)/74f02bf2-3756-43fb-8bdd-52c6a63174b0--Scallop-Corn-Gyoza.jpg",
        iframeUrl:
          "https://food52.com/recipes/6330-scallop-and-corn-gyoza-with-sambal-dipping-sauce"
      },
      {
        name: "Tibetan pork momos with ginger and chilli",
        ingredients: [
          "chicken",
          "pork",
          "onion",
          "garlic",
          "ginger",
          "spring onion",
          "chilli",
          "coriander",
          "cumin",
          "garam masala",
          "butter",
          "lemon"
        ],
        image:
          "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/7_3.jpg",
        iframeUrl:
          "https://www.eatyourbooks.com/library/recipes/1266203/tibetan-pork-momos-with-ginger"
      },
      {
        name: "Spinach and ricotta malfatti",
        ingredients: [
          "spinach",
          "eggs",
          "ricotta",
          "nutmeg",
          "parmesan",
          "butter"
        ],
        image:
          "https://flockler.com/thumbs/sites/192/malfatti-cf11458d-a881-4adf-a8c0-beed2e54bc44_s600x600_c1564x914_l0x684.jpg",
        iframeUrl:
          "https://www.bbc.co.uk/food/recipes/spinach_and_ricotta_81488"
      },
      {
        name: "Baked Apple Dumplings With Brown Sugar Sauce",
        ingredients: [
          "sugar",
          "apples",
          "butter",
          "apple juice",
          "brandy",
          "cinnamon"
        ],
        image:
          "https://www.tasteofhome.com/wp-content/uploads/2017/10/Apple-Dumplings-with-Sauce_exps38057_OBD2777381A04_23_5bC_RMS-1-696x696.jpg",
        iframeUrl:
          "https://www.epicurious.com/recipes/member/views/apple-dumplings-with-brown-sugar-butter-sauce-52887631"
      },
      {
        name: "Tomato & harissa stew with cheddar dumplings",
        ingredients: [
          "celery",
          "tomato",
          "harissa",
          "courgette",
          "chickpea",
          "butter",
          "cheddar",
          "milk"
        ],
        image:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1237457_7.jpg?itok=UDZpYyOx",
        iframeUrl:
          "https://www.bbcgoodfood.com/recipes/2940671/tomato-and-harissa-stew-with-cheddar-dumplings"
      },
      {
        name: "Chipotle sweet potato stew with cheddar dumplings",
        ingredients: [
          "onion",
          "butternut squash",
          "tomato",
          "chilli",
          "beans",
          "chipotle",
          "butter",
          "cheddar",
          "jalapeno"
        ],
        image:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/_-chipotle-sweet-potato.jpg?itok=svcHrzSn",
        iframeUrl:
          "https://www.bbcgoodfood.com/recipes/chipotle-sweet-potato-black-bean-stew-cheddar-dumplings"
      },
      {
        name: "Sri Lankan braised roots stew & coconut dhal dumplings",
        ingredients: [
          "lentils",
          "coconut",
          "mustard",
          "curry",
          "chilli",
          "onion",
          "turmeric",
          "lime"
        ],
        image:
          "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/sri-lankan-braised-roots-stew-coconut-dhal-dumplings.jpg?itok=F_3Pntce",
        iframeUrl:
          "https://www.bbcgoodfood.com/recipes/sri-lankan-braised-roots-stew-coconut-dhal-dumplings"
      },
      {
        name: "Steamed pork & prawn wontons",
        ingredients: [
          "pork",
          "prawn",
          "garlic",
          "garlic",
          "oyster",
          "lettuce",
          "spring onion"
        ],
        image:
          "https://gbc-cdn-public-media.azureedge.net/img72581.768x512.jpg",
        iframeUrl:
          "https://www.bbcgoodfood.com/recipes/2118/steamed-pork-and-prawn-wontons"
      },
      {
        name: "Ricotta gnudi with sage butter",
        ingredients: [
          "ricotta",
          "parmesan",
          "egg",
          "nutmeg",
          "semolina",
          "butter",
          "sage",
          "pine nuts"
        ],
        image:
          "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/ricotta-gnudi.jpg?webp=true&quality=45&crop=14px%2C2630px%2C3516px%2C1494px&resize=1880%2C799",
        iframeUrl:
          "https://www.bbcgoodfood.com/recipes/ricotta-gnudi-sage-butter"
      }
    ],
    recipes: []
  };

  componentDidMount() {
    this.setState({
      recipes: this.state.originalRecipes
    });
  }

  onChange = event => {
    //copy array
    //var recipes = [...this.state.recipes]; //spread operator to duplicate the array

    //recipes.splice(0, 1);
    //this.setState({ recipes }); // object destructuring and restructuring

    var recipes = [];

    if (event.target.value.length > 0) {
      for (var i = 0; i < this.state.originalRecipes.length; i++) {
        if (
          this.state.originalRecipes[i].ingredients.includes(event.target.value)
        ) {
          recipes.push(this.state.originalRecipes[i]);
        }
      }
    } else {
      recipes = [...this.state.originalRecipes];
    }

    // if receips.lenth = 0
    // conditional rendering

    this.setState({
      recipes
    });
  };

  render() {
    return (
      <div className="mainBlock">
        <h1>Your one stop dumpling shop</h1>
        <div className="search">
          <input
            onChange={this.onChange}
            type="text"
            placeholder="Search an ingredient here. You might win some, you might dim sum."
            name="search"
          ></input>
        </div>
        <div className="grid">
          {this.state.recipes.map(recipe => (
            <Recipe
              image={recipe.image}
              name={recipe.name}
              iframeUrl={recipe.iframeUrl}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
