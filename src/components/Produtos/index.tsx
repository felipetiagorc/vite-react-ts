import React, { useState } from 'react';

export interface IProduto {
  code?: string;
  description?: string;
  price?: number;

  key: number;
}

const Produtos = () => {
  const [produtos, setProdutos] = useState<IProduto[]>([
    {
      code: '10',
      description: 'seila',
      price: 12.0,
      key: 1,
    },
  ]);

  const add = () => {
    setProdutos([
      ...produtos,
      {
        code: '',
        description: '',
        price: undefined,
        key: Date.now(),
      },
    ]);
  };
  const remove = (key: number) => {
    setProdutos(prevState => prevState.filter(produto => produto.key !== key));
  };

  // recebe a key, e o evento.. bem específico do react:
  const handleInputchange = (
    key: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProdutos(prevState => {
      const newState = prevState.map(produto => {
        if (produto.key === key) {
          return {
            ...produto,
            // pega o nome do evento q foi recebido (que pode ser qq propriedade - ex: 'description)
            // e seta com o valor que vc recebeu via evento tbm..
            [event.target.name]: event.target.value,
          };
        }
        // se nao for o item que eu quero, retorna o produto pra nao dar problema:
        return produto;
      });
      // aqui carimba no estado do React o novo valor:
      return newState;
    });
  };
  return (
    <div>
      <h1>Produtos</h1>

      {produtos.map((produto, index) => (
        <div className='row' key={produto.key}>
          {index + 1}

          <input
            type='text'
            name="code"
            placeholder='code'
            value={produto.code}
            onChange={event => handleInputchange(produto.key, event)}
          />
          <input
            type='text'
            name="description"
            placeholder='description'
            value={produto.description}
            onChange={event => handleInputchange(produto.key, event)}
          />
          <input
            type='text'
            name="price"
            placeholder='price'
            value={produto.price}
            onChange={event => handleInputchange(produto.key, event)}
          />
          <button className='delete' onClick={() => remove(produto.key)}>
            Delete
          </button>
        </div>
      ))}

      <button className='add' onClick={add}>
        Add
      </button>
      <pre>
        <code>{JSON.stringify(produtos, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Produtos;
