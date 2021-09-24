import React from 'react'

class FilteredList extends React.Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            unfliteredArray: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState( {userInput: value} )
    }

    renderList(value) {
        let filter = value;
        let unfiltered = this.state.unfliteredArray;
        let filtered = unfiltered.filter(word => word.includes(filter))

        this.setState( {filteredArray: filtered} )
    }

    render() {
        let filtered = this.state.filteredArray.map(word => {
            return <h2>{word}</h2>
        });
        return (
            <div className='pageDisplay'>
                <input onChange={ (e) => {
                    this.handleChange(e.target.value)
                    this.renderList(e.target.value)
                    } }></input>
                <div className='dispayList'>{filtered}</div>
            </div>
        )
    }
}

export default FilteredList