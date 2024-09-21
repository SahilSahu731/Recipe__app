import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Context'
import List from '../../components/recipe-list/List'

const Home = () => {

    const { recipeList } = useContext(GlobalContext)



    return (
        <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10 '>
            {
                recipeList && recipeList.length > 0 ?
                    recipeList.map(item => <List item={item} />)
                    : <div>
                        <p className='lg:text-4xl text-xl text-center text-black font-extrabold'>Nothing to show. Please Search Something Else</p>
                    </div>
            }
        </div>
    )
}

export default Home
