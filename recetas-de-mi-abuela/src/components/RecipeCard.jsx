
function RecipeCard({
  recipe,
  onViewRecipe,
  isFavorite,
  onToggleFavorite
}) {
  return (
    <article className="recipe-card">

      <div className="recipe-image-container">

        <img
          src={recipe.image}
          alt={recipe.name}
          className="recipe-image"
        />

        <button
          className={
            isFavorite
              ? "favorite-button selected"
              : "favorite-button"
          }
          onClick={() => onToggleFavorite(recipe.id)}
          aria-label="Agregar o quitar de favoritos"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

      </div>

      <div className="recipe-content">

        <span className="recipe-category">
          {recipe.category}
        </span>

        <h3>{recipe.name}</h3>

        <p>{recipe.description}</p>

        <div className="recipe-footer">

          <span>🕒 {recipe.time}</span>

          <button
            className="recipe-button"
            onClick={() => onViewRecipe(recipe)}
          >
            Ver receta
          </button>

        </div>

      </div>

    </article>
  );
}

export default RecipeCard;

