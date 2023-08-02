import React from 'react'
import Layout from '../components/layouts/Layout'
import {Link} from 'react-router-dom'
import '../styles/PageNotFound.css'

const PageNotFound = () => {
  return (
    <Layout title={'Go Back - Page Not Found'}>
      <div className="pnf">
        <p className='pnf-title'>404</p>
        <p className='pnf-heading'>Oops! Page Not Found</p>
        <Link to="/" className='pnf-btn'>Go Back</Link>
      </div>
    </Layout>
  )
}

export default PageNotFound
