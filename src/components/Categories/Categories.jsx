import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { getCategories, getProductsByCategory } from '../../services/api';

function Categories() {
  const { setFilterCategory, setProducts } = useContext(AppContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleClick = async (categoryName) => {
    const { data: { results } } = await getProductsByCategory(categoryName);
    setProducts(results);
    setFilterCategory(results);
  };

  return (
    <section className="categories">
      <h2>Categorias</h2>
      <ul>
        {categories.map(({ id, name }) => (
          <label key={name} htmlFor={name}>
            <input
              type="radio"
              id={name}
              name="category"
              value={id}
              onClick={({ target }) => handleClick(target.value)}
            />
            <li>
              {name}
            </li>
          </label>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
