import Header from 'components/header/Header'
import Slidebar from 'components/Slidebar/Slidebar'
import React from 'react'

function Layout(props) {
 const {children } = props

  return (
    <div className='row'>
      <Header />
      <div className="row">
        <div className="col-2 ">
          <Slidebar />
        </div>
        <div className='col-10 p-0 m-0'>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout