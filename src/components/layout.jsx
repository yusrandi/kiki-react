import React from 'react'
import Navbar from './navbar'

const Layout = ( {children} ) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns p-3  mt-6">
            <div className="column" style={{ minHeight: "100vh" }}>
                <main> {children} </main>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Layout