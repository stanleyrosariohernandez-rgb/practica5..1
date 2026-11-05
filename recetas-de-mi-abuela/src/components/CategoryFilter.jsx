
function CategoryFilter({ category, setCategory }) {

  const categories = [
    "Todas",
    "Postre tradicional",
    "Plato principal"
  ];

  return (
    <div className="category-container">

      {categories.map((item) => (

        <button
          key={item}
          className={
            category === item
              ? "category-button active"
              : "category-button"
          }
          onClick={() => setCategory(item)}
        >
          {item}
        </button>

      ))}

    </div>
  );
}

export default CategoryFilter;
