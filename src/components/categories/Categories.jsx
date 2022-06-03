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
    <section>
      <h2>Categorias</h2>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <input
              type="radio"
              name="category"
              value={id}
              onClick={(e) => setFilterCategory(e.target.value)}
            />
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
