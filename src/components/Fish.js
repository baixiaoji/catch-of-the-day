import React from 'react'
import {formatPrice} from '../helpers'
class Fish extends React.Component {

    handleClick = () => {
        this.props.addToOrder(this.props.index)
    }
    render() {
        const {details} = this.props
        const isAvailable = details.status === 'available'
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name}/>
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>{ isAvailable ? 'Add to Order' : 'Sold Out!'}</button>
            </li>
        );
    }
}

export default Fish;