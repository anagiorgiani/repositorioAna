const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPessoa = order.order.delivery.deliveryPerson
  const segundoNome = order.name
  const phone = order.phoneNumber
  const end = order.address.street
  const num = order.address.number
  const apto = order.address.apartment

  console.log(`ola ${deliveryPessoa} entrega para ${segundoNome} telefone: ${phone} R.${end} Nº ${num} AP: ${apto} `)
}



customerInfo(order);



const orderModifier = (order) => {
  const name = order.name = 'Luiz Silva';
  let pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const money = order.payment.total = '50';
  pizza = ['muzarella', 'calabresa']

  console.log(`Ola  ${name}, o total do seu pedido de ${pizza}, e ${drink} é ${money}.`)
}

orderModifier(order);

