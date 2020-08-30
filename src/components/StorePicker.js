import React from 'react'
import { getFunName } from '../helpers'

export default class StorePicker extends React.Component {

    goToStore(e) {
        e.preventDefault()
        console.log('Going to store')
    }
    render() {
        return (
            <form className='store-selector' onSubmit={this.goToStore}>
                <h2>Please enter a Store</h2>
                <input type='text' required placeholder='Store Name' defaultValue={getFunName()} />
                <button type='submit'>Visit Store ➡️ </button>
            </form>
        )
    }
}
