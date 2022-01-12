import React from 'react';

class InputForm extends React.Component {

    render(){
        return(<div className='form-container'>
            <form>
                <input className='searchBar' value={this.props.value} onChange={this.props.handleChange} placeholder='Github Handle' type='text'/>
                <button className='searchBtn' onClick={this.props.handleSearch} >Search</button>
        </form>
        </div>
        )
    }
}

export default InputForm;