import React,{ Component } from 'react';
import { render } from 'react-dom';
import Typed from 'react-typed';

class Typewriter extends Component {
    render() {

        const style = {
            fontSize: '25px',
            color: 'white',
            background: 'black',
            paddingLeft: '20px',
            paddingRight: '20px',
            borderRadius: '20px',
            paddingBottom: '4px'
        };
        return (
            <div>
                <Typed
                    strings={[
                        ' Hello ',
                        ' I am Yashwant ',
                        ' I am a Software Developer '
                    ]}
                    typeSpeed={40}
                    backSpeed={80}
                    loop
                    style={style}
                />
                <br/>

            </div>
        );
    }
}

export default Typewriter;