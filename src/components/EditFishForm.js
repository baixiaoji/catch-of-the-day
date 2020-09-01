import React, {Component} from 'react'
class EditFishForm extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleChange = event => {
        console.log(event.currentTarget.value)
        const updateFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        }
        console.log(updateFish)
        this.props.updateFish(this.props.index, updateFish)
    }
    render() {
        if(!this.props.fish) {
            return null
        }
        return (
            <div className="fish-edit">
                <input type='text' name='name' value={this.props.fish.name} onChange={this.handleChange} />
                <input type='text' name='price' value={this.props.fish.price} onChange={this.handleChange} />
                <select type="text" name='status' value={this.props.fish.status} onChange={this.handleChange}>
                        <option value='available'>Fresh!</option>
                        <option value='unavailable'>solid out!</option>
                </select>
                <textarea ref={this.descRef} name='desc' value={this.props.fish.desc} onChange={this.handleChange} />        
                <input  type="text"  name='image' value={this.props.fish.image} onChange={this.handleChange} />      
                <button onClick={() => this.props.deleteFish(this.props.index)}>
                    Remove Fish
                </button>
            </div>
        )
    }
}

export default EditFishForm;