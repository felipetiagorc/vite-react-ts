import { useFieldArray, useForm } from 'react-hook-form';

export interface IProduto {
  code?: string;
  description?: string;
  price?: number;
}

// "criou um type pra usar um array de IProduto´s"

// Isso avisa pro useForm que meu form tem 1 tipo 'FormValues', que consiste em:
// uma prop 'produtos' : que recebe um array de 'Iproduto'
// dentro desse array ele tem vários objetos 'IProduto´s' com suas props

type FormValues = {
  produtos: IProduto[];
};

export const ProdutosHookForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    delayError: 500,
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'produtos', //esse é o nome do state
    // keyName: 'OUTRA_CHAVE_DO_BACK'
  });

  console.log('ERRROSS>', errors);

  const add = () => {
    append({
      code: '',
      description: '',
      price: undefined,
    });
  };

  // ao inves de produtos, a gente passa o 'fields' do useForm aqui:
  return (
    <div>
      <h1>Produtos</h1>
      <form onSubmit={handleSubmit(data => console.log(data))}>
        {fields.map((produto, index) => (
          <div key={produto.id} className='row'>
            {index + 1}

            <input
              type='text'
              placeholder='code'
              {...register(`produtos.${index}.code`, {
                required: 'Campo obrigatório!',
              })}
            />
            <input
              type='text'
              placeholder='description'
              {...register(`produtos.${index}.description`)}
            />
            <input
              type='text'
              placeholder='price'
              {...register(`produtos.${index}.price`)}
            />

            <button className='delete' onClick={() => remove(index)}>
              Delete
            </button>
          </div>
        ))}
        <button type='submit'>Enviar</button>
      </form>

      <button className='add' onClick={add}>
        Add
      </button>
      <pre>
        <code>{JSON.stringify(fields, null, 2)}</code>
      </pre>
    </div>
  );
};

export default ProdutosHookForm;
