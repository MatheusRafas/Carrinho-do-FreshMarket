import './styles/styles.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';

function App() {
  const [cart, setCart] = useState([]);
  const [productObject, setProductObject] = useState({
    name: 'produto',
    category: 'categoria',
    price: Math.floor(Math.random() * (100 - 10) + 10),
    quantity: 1,
  });

  const BACKEND_URL = 'https://carrinho-do-freshmarket.onrender.com';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`${BACKEND_URL}/cart`)
      .then(response => setCart(response.data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  };
  
  const handleAddItem = () => {
    axios.post(`${BACKEND_URL}/cart`, productObject)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => console.error('Erro ao adicionar item:', error));
  };
  
  const handleRemoveItem = (item) => {
    axios.delete(`${BACKEND_URL}/cart/${item.id}`)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => console.error('Erro ao remover item:', error));
  };
  
  const handleUpdateItem = (item, action) => {
    let newQuantity = item.quantity;
  
    if (action === 'decrease') {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }
    if (action === 'increase') {
      newQuantity += 1;
    }
  
    const newData = { ...item, quantity: newQuantity };
  
    axios.put(`${BACKEND_URL}/cart/${item.id}`, newData)
      .then(response => {
        console.log(response.data);
        fetchData();
      })
      .catch(error => console.error('Erro ao atualizar item:', error));
  };
  
  const getTotal = () => {
    let sum = 0;
    for (let item of cart) {
      sum += item.price * item.quantity;
    }
    return sum;
  };

  const cartTotal = getTotal();

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Sua compra'} />
        <div className='content'>
          <section>
            <button onClick={handleAddItem} style={{ padding: "5px 10px", marginBottom: 15, borderRadius: "51px" }}>Adicionar ao carrinho</button>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <TableRow
                    key={item.id}
                    data={item}
                    handleRemoveItem={handleRemoveItem}
                    handleUpdateItem={handleUpdateItem}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan='5' style={{ textAlign: 'center' }}>
                      <b>Carrinho de compras vazio.</b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary total={cartTotal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
