import React from 'react'

const Header = props => {
    const { tagline } = props
    return (
        <header className='top'>
            <h1>Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            Day</h1>
            <h3 className='tagline'>
                <span>{tagline}</span>
            </h3>
        </header>
    )
}

// class Header extends React.Component {

//     render() {
//         const { tagline } = this.props;
//         return (
//             <header className='top'>
//                 <h1>Catch
//                 <span className="ofThe">
//                     <span className="of">of</span>
//                     <span className="the">the</span>
//                 </span>
//                 Day</h1>
//                 <h3 className='tagline'>
//                     <span>{tagline}</span>
//                 </h3>
//             </header>
            
//         );
//     }
// }

export default Header;