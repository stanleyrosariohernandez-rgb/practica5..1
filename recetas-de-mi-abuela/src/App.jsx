
import { useState, useEffect } from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ThemeButton from "./components/ThemeButton";

import recipes from "./data/recipes";

function App() {

  // Receta seleccionada
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Buscador
  const [search, setSearch] = useState("");

  // Categorias
  const [category, setCategory] = useState("Todas");

  // Favoritos
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("recetas-favoritas")
      ) || [];
    } catch {
      return [];
    }
  });

  // Tema oscuro
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("recetas-tema") === "dark";
  });

  // Guardar favoritos
  useEffect(() => {
    localStorage.setItem(
      "recetas-favoritas",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Guardar tema
  useEffect(() => {
    localStorage.setItem(
      "recetas-tema",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Abrir receta
  function handleViewRecipe(recipe) {
    setSelectedRecipe(recipe);
  }

  // Cerrar receta
  function handleCloseRecipe() {
    setSelectedRecipe(null);
  }

  // Agregar o quitar favoritos
  function handleToggleFavorite(id) {

    setFavorites((previous) => {

      if (previous.includes(id)) {
        return previous.filter((item) => item !== id);
      }

      return [...previous, id];

    });

  }

  // Filtrar recetas
  const filteredRecipes = recipes.filter((recipe) => {

    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "Todas" ||
      recipe.category === category;

    return matchesSearch && matchesCategory;

  });

  // Aplicar tema
  return (

    <div className={darkMode ? "app dark-mode" : "app"}>

      <Header />

      <div className="theme-container">
        <ThemeButton
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>

      <Hero />

      <main>

        <section className="recipes-section" id="recetas">

          <div className="section-heading">

            <span className="section-label">
              NUESTRA COCINA
            </span>

            <h2>Recetas con historia</h2>

            <p>
              Descubre los sabores que han acompañado
              a nuestra familia durante generaciones.
            </p>

          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            category={category}
            setCategory={setCategory}
          />

          <p className="results-count">
            {filteredRecipes.length} recetas encontradas
          </p>

          

          <div className="recipes-grid">

            {filteredRecipes.length > 0 ? (

              filteredRecipes.map((recipe) => (

                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onViewRecipe={handleViewRecipe}
                  isFavorite={favorites.includes(recipe.id)}
                  onToggleFavorite={handleToggleFavorite}
                />

              ))

            ) : (

              <p className="no-results">
                No encontramos recetas con ese nombre.
              </p>

            )}

          </div>

        </section>

        <section className="story-section" id="historia">

          <h2>Una tradición que vive en cada plato</h2>

          <p>
            Este recetario nace del cariño por nuestra
            abuela y de la intención de conservar las
            recetas que forman parte de nuestra historia.

            Cada preparación representa un recuerdo,
            una reunión familiar y una parte de
            nuestra cultura dominicana.
          </p>

        </section>

      </main>

      <footer className="footer">

        <p>Recetas de mi abuela</p>

        <p>San Juan, República Dominicana</p>

        <p>
          © 2026 - Preservando nuestra tradición culinaria
        </p>

      </footer>

      <RecipeDetails
        recipe={selectedRecipe}
        onClose={handleCloseRecipe}
      />

    </div>

  );

}

export default App;


