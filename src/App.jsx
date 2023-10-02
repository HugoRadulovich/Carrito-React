
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'
import { useContext, useId } from 'react'
import { FiltersContext } from './context/filters';
import { useFilter } from './hooks/useFilter';
import { products as initialProducts } from './mocks/products.json'

function App() {

const minPriceFilterId = useId();
const categoryFilterId = useId();

const { filters, setFilters, } = useContext(FiltersContext);
const {filterProducts} = useFilter()
const filteredProducts = filterProducts(initialProducts )
console.log(filteredProducts)


  const handleChangeMinPrice = (event) => {
      setFilters(prevState =>({
        ...prevState, 
        minPrice: event.target.value
      })
      )
    }

  const handleChangeCategory = (event) => {
      setFilters(prevState => ({
        ...prevState, 
        category: event.target.value,
      }))
  }

  return (
    <CartProvider>
    <div className="grid text-white grid-cols-4 ">
        <div className="col-span-3 bg-slate-700">
        <header className="">
            <p className="">Carrito React</p>
            <label htmlFor={minPriceFilterId} className="">Precio a partir de:</label>
            <input 
            type="range"
            id={minPriceFilterId} 
            className=""
            min={0}
            max={2500} 
            onChange = {handleChangeMinPrice}
            value={filters.minPrice}
            />

            <span className="">{filters.minPrice}</span>
            
            <label htmlFor={categoryFilterId} className=""></label>
            <select name="" id={categoryFilterId} className="text-black" onChange={handleChangeCategory}>
              <option value="all" className="">Todo</option>
              <option value="laptops" className="">Portatiles</option>
              <option value="smartphones" className="">Celulares</option>
            </select>

          </header>
          <main className="">
            <Products products = {filteredProducts}/>
          </main>
        </div>
        <div className="bg-slate-400">
          <Cart/>
        </div>
    </div>
    </CartProvider>
  )
}

export default App
