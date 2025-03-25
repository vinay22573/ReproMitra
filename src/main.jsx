import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Navbar from './Layout/Navbar/Navbar'
import HomeHero from './section/HomeHero'
import Layout from './Layout/Layout'
import Chatbot from './section/Chatbot'
import HealthIssues from './pages/HealthIssues'
import HealthIssuesMain from './pages/HealthIssuesMain'
import Disease from './pages/Disease'

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<Layout/>} >
        <Route path="/" element={<HomeHero/>} />
        <Route path="/chat" element={<Chatbot/>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/health-issues" element={<HealthIssuesMain/>} />
        <Route path="/disease" element={<Disease/>} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {route} />
  </StrictMode>,
)
