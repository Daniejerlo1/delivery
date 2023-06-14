import React from 'react'
import imagem from 'assets/imagemprincipal.png'
import './main.scss'
import Category from 'components/category/category'
import mobileimg from 'assets/category-images/mobile.png'
import cosmeticsimg from 'assets/category-images/cosmetics.png'
import electronicsimg from 'assets/category-images/electronics.png'
import furnituresimg from 'assets/category-images/furniture.png'
import watchesimg from 'assets/category-images/watches.png'
import decorimg from 'assets/category-images/decor.png'
import accessoriesimg from 'assets/category-images/accessories.png'

type Props = {}

function Main({}: Props) {
  return (
    <main>
        <a href="#"><img src={imagem} alt="imagemprincipal" /></a>
        <h2>Shop by Category</h2>
        <div className='categories'>
          <Category name='Mobile' icon={mobileimg} />
          <Category name='Cosmetics' icon={cosmeticsimg}/>
          <Category name='Electronics' icon={electronicsimg}/>
          <Category name='Furnitures' icon={furnituresimg}/>
          <Category name='Watches' icon={watchesimg}/>
          <Category name='Decor' icon={decorimg}/>
          <Category name='Accessories' icon={accessoriesimg}/>
        </div>
    </main>
  )
}
export default Main