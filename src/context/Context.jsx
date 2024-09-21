import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";



export const GlobalContext = createContext(null)

export default function GlobalState({children}) {

    const [searchParam,setSearchParam] = useState('')
    const [recipeList,setRecipeList] = useState([])
    const [recipeDetailsData,setRecipeDetailsData] = useState(null)
    const [favoriteList,setfavoriteList] = useState([])

    const  naviggate  = useNavigate()


    async function handleSubmit(event) {
        
        event.preventDefault()

        try {

            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`)

            const data = await res.json()

            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                
                setSearchParam('')
                naviggate('/')
            }

            // console.log(data);
            
            
        } catch (error) {
            setSearchParam('')
            console.log('Error Bhai Saab');
            
        }
    }

    // console.log( recipeList);

    function handleAddToFavorite(getCurrentitem){
        // console.log(getCurrentitem);/
        let copyFavoriteeList = [...favoriteList]
        const index = copyFavoriteeList.findIndex(item=>item.id===getCurrentitem.id)
        if(index === -1){
            copyFavoriteeList.push(getCurrentitem)
        }else{
            copyFavoriteeList.splice(index)
        }

        setfavoriteList(copyFavoriteeList)

    }
    


    return <GlobalContext.Provider value={{ searchParam,setSearchParam, recipeList, handleSubmit, recipeDetailsData,setRecipeDetailsData, handleAddToFavorite, favoriteList }}>
        {children}
    </GlobalContext.Provider>
}