import React, { useEffect, useState } from 'react';

export default function Products() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((checked) => !checked);
  };

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(`data/${checked ? 'sale_' : ''}product.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((e) => setError('에러가 발생 되었음'))
      .finally(() => setLoading(false));
    return () => {
      console.log('깨끗하게 청소');
    };
  }, [checked]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        onChange={handleChange}
        style={{ width: 'auto', height: 'auto' }}
      />
      <label htmlFor="checkbox" style={{ marginLeft: '10px' }}>
        Hot Sale!
      </label>
      <ul className="list__item">
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <span>{product.price}</span>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
