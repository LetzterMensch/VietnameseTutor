/* eslint-disable no-unused-vars */
import * as React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'

function Hero() {
  const classes = classnames('hero', 'hero-lg', 'mb-3','h-75 d-inline-block w-100 p-3', styles.hero)
  return (
    <div className={classes}>
      <div className="hero-body text-center text-black">
        <h1>Premium Property Finder</h1>
        <p className="mb-0">Bringing premium property right to your fingertips</p>
      </div>
    </div>
  )
}

export default Hero