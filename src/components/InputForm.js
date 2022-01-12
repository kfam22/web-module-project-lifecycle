import React from 'react';

class InputForm extends React.Component {

    render(){
        return(<div className='form-container'>
            <form>
                <input value={this.props.value} onChange={this.props.handleChange} placeholder='Github Handle' type='text'/>
                <button onClick={this.props.handleSearch} >Search</button>
        </form>
        </div>
        )
    }
}

export default InputForm;