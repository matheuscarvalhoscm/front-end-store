import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import { getCategories } from '../../services/api';

function Categories() {
  const { setFilterCategory } = useContext(AppContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await getCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

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
              onClick={(e) => setFilterCategory(e.target.value)}
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
