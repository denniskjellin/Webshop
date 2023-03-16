import { reactive } from 'vue'

const getInitialBasket = () => {
  return {
    items: JSON.parse(localStorage.getItem('basketItems') || '[]'),
    total: parseFloat(localStorage.getItem('basketTotal')) || 0,
  }
}

const basket = reactive(getInitialBasket())

function addToBasket(item) {
  basket.items.push(item)
  basket.total += item.price
  localStorage.setItem('basketItems', JSON.stringify(basket.items))
  localStorage.setItem('basketTotal', basket.total)
}

function removeFromBasket(index) {
  const item = basket.items[index]
  basket.items.splice(index, 1)
  basket.total -= item.price
  localStorage.setItem('basketItems', JSON.stringify(basket.items))
  localStorage.setItem('basketTotal', basket.total)
}

export default {
  basket,
  addToBasket,
  removeFromBasket,
}
