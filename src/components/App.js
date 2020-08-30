import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {
    render() {
        return (
            <div className='catch-of-day'>
                <div className='menu'>
                    <Header tagline='Catch of the day'/>
                </div>
                <Inventory></Inventory>
                <Order></Order>

            </div>
        )
    }
}

export default App