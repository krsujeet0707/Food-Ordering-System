import React from 'react';

class TextInput extends React.Component {
    render() {
        return (
            <div >
                {/* <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span> */}
                <input type={this.props.type}
                    id="input"
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    autocomplete="off" /><br /><br />
            </div>
        )
    };
}

export default TextInput