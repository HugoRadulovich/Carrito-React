import { useState } from 'react'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
     <div className="grid text-white grid-cols-4">
        <div className="col-span-3 bg-slate-700">
        <header className="">
            <p className="">Carrito React</p>

          </header>
          <main className="">
            <Products/>
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
