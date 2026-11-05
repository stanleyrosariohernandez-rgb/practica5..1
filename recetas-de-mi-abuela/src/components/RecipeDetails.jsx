
import { useEffect } from "react";

function RecipeDetails({ recipe, onClose }) {

  useEffect(() => {

    if (!recipe) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };

  }, [recipe, onClose]);

  if (!recipe) {
    return null;
  }

  return (
    <div
      className="recipe-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >

      <section
        className="recipe-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="recipe-title"
      >

        <button
          className="close-button"
          onClick={onClose}
          aria-label="Cerrar receta"
        >
          ✕
        </button>

        <img
          src={recipe.image}
          alt={recipe.name}
          className="details-image"
        />

        <div className="details-content">

          <span className="recipe-category">
            {recipe.category}
          </span>

          <h2 id="recipe-title">{recipe.name}</h2>

          <p>{recipe.description}</p>

          <div className="details-information">

            <span>🕒 {recipe.time}</span>

            <span>🍽️ {recipe.servings} porciones</span>

          </div>

          <div className="ingredients-section">

            <h3>Ingredientes</h3>

            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

          </div>

          <div className="preparation-section">

            <h3>Preparación</h3>

            <ol>
              {recipe.preparation.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

          </div>

          <div className="recipe-tip">

            <h3>Consejo de la abuela</h3>

            <p>{recipe.tip}</p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default RecipeDetails;

