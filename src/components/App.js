import React from 'react'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }

    componentDidMount() {
        const { params } = this.props.match
        const localStorageRef = localStorage.getItem(params.storeId)
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            })
        }
        
    }
    
    componentDidUpdate() {
        const { params } = this.props.match
        localStorage.setItem(params.storeId, JSON.stringify(this.state.order))
    }

    componentWillUnmount() {
    }

    addFish = fish => {
        const fishes = {...this.state.fishes}
        
        fishes[`fish${Date.now()}`] = fish
        
        this.setState({
            fishes,
        })
    }

    updateFish = (key, updateFish) => {
        const fishes = {...this.state.fishes, [key]: updateFish}
        this.setState({
            fishes,
        })
    }

    deleteFish = key => {
        const fishes = {...this.state.fishes}
        fishes[key] = null
        this.setState({
            fishes
        })
    }
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes,
        })
    }

    addToOrder = (key) => {
        const order = { ...this.state.order }
        
        order[key] =  order[key] + 1 || 1
        
        this.setState({
            order,
        })
    }
    render() {
        return (
            <div className='catch-of-the-day'>
                <div className='menu'>
                    <Header tagline='Catch of the day'/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                index={key} 
                                details={this.state.fishes[key]} addToOrder={this.addToOrder}
                            />
                        ))}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory 
                    addFish={this.addFish}
                    deleteFish={this.deleteFish}
                    loadSampleFishes={this.loadSampleFishes}
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                />
            </div>
        )
    }
}

export default App