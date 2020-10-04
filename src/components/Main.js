import React, {Component} from 'react'
import fakeStoreApi from '../data/fakeStoreApi'
import '../stylesheets/MainStore.css'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            allProducts: []
        }
    }

    componentDidMount() {
        this.getAllProductsInfo()
    }

    getAllProductsInfo = () => {
        fakeStoreApi.getAllProducts().then(res => {
            console.log('data of All Products', res.data)
            this.setState({
                allProducts: res.data
            })
        })
    }

render() {

    return(
        <div> 
            <button>Mens Clothing</button>
            <div className="shop-container">
                {this.state.allProducts.map(item => (
                    <div className='product-item'>
                        <h1>{item.title}</h1>
                        <img src={item.image} className='product-image' width='200px' height='200px'/>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

}

export default Main