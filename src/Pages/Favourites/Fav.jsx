import React, { useContext } from 'react'
import List from '../../components/recipe-list/List'
import { GlobalContext } from '../../context/Context'

const Fav = () => {
 
  const { favoriteList } = useContext(GlobalContext)



  return (
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10 '>
          {
              favoriteList && favoriteList.length > 0 ?
              favoriteList.map(item => <List item={item} />)
                  : <div>
                      <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing is Added in Favorites</p>
                  </div>
          }
      </div>
  )
}



export default Fav
