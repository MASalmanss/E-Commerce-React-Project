import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import { Provider } from 'react-redux'
import ProductList from './components/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PageContainer>
        <Header/>
        <ProductList/>
      </PageContainer>
    </>
  )
}

export default App
