import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {
    let [products, setProducts] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
      getProducts()
    }, [])


    let getProducts = async() =>{
        let response = await fetch('http://localhost:8000/api/products/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
        console.log(data)

        if(response.status === 200){
          setProducts(data.results)
        }else if(response.statusText === 'Unauthorized'){
          logoutUser()
        }
        
    }

    return (
        <div>
            <p>You are logged to the home page!</p>


            <ul>
                {products.map(product => (
                    <li key={product.id} >{product.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage