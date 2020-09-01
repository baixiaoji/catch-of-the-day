import React from 'react'
import AddFishForm from './AddFishForm'
import EditFishForm from './EditFishForm'

class Inventory extends React.Component {
    render() {
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                { Object.keys(this.props.fishes).map(key => <EditFishForm 
                    updateFish={this.props.updateFish} 
                    index={key}  key={key} fish={this.props.fishes[key]}
                    deleteFish={this.props.deleteFish}
                    />) }
                <AddFishForm addFish={this.props.addFish} />
                <button onClick={this.props.loadSampleFishes}>Load Sample Fished</button>
            </div>
        );
    }
}

export default Inventory;