class TextInput extends React.Component {
    state = {value: ''}

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit" onClick={(e) => {
                    handleSubmit(this.state.value);
                    this.setState({value: ""});
                }}/>
            </div>
        )
    }
}

function Item(props) {
    return (
        <span>{props.value}</span>
    )
}

class List extends React.Component {
    render() {
        const items = this.props.items.map(item => {
            return (
                <li>
                    <Item value={item.value}/>
                </li>
            )
        })
        return (
            <ul>
                {items}
            </ul>
        )
    }
}

class Page extends React.Component {
    state = {items: []}
    handleSubmit = (str) => {
        let items = this.state.items.slice();
        items.push({
            value: str
        });
        this.setState({
            items: items
        });
    }

    render() {
        return (
            <div>
                <h1>ToDo List</h1>
                <div className="text-input-box">
                    <TextInput handleSubmit={this.handleSubmit}/>
                </div>

                <div className="list-box">
                    <List items={this.state.items}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('container')
);