import React from 'react'
import imagem from 'assets/imagemprincipal.png'
import './main.scss'
import Category from 'components/category/category'

type Props = {}

function Main({}: Props) {
  return (
    <main>
        <a href="#"><img src={imagem} alt="imagemprincipal" /></a>
        <h2>Shop by Category</h2>
        <Category name='Mobile' icon=''/>
        <Category name='Cosmetics' icon=''/>
        <Category name='Electronics' icon=''/>
        <Category name='Furnitures' icon=''/>
        <Category name='Watches' icon=''/>
        <Category name='Decor' icon=''/>
        <Category name='Accessories' icon=''/>
    </main>
  )
}
export default Main