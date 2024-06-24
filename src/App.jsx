import React from 'react'
import { Dashboard, Footer, Hero, Navbar, Teams } from './components'
import { heroAPI,footer, dashboardAPI, teamAPI, navbar } from './data/data'



const App = () => {
  return (
  <>
   <Navbar navbar={navbar}/>
  <Hero heroAPI={heroAPI} />
  <Dashboard dashboardAPI={dashboardAPI} />
  <Teams teamAPI ={teamAPI} />
  <Footer footer={footer}/>
 
  </>
  )
}

export default App
