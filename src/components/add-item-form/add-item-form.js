import { Component } from "react";

export default class AddItemForm extends Component {
    
    state = {
        content: '',
    }
    
    getValue = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    submitForm = (e)=>  {
        e.preventDefault();
        
        this.props.addItem(this.state.content);
        this.setState({
            content: ''
        });
    }

    render () {
        return (
            <form className="flex"  onSubmit={ this.submitForm}>
                <input className='w-full rounded border border-gray-300 outline-none p-2' 
                type="text" 
                placeholder='To do' name="" id="" 
                onChange={this.getValue} 
                value={this.state.content}/>
                <button className="border px-5 py-1 ml-2"
                >Add</button>
            </form>
        );
    };
}