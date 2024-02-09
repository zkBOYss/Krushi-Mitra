import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Layout from './layout/layout'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
