import React, { Component } from 'react'

export default class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            allMemeImgs: []
        };
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                console.log(memes[0])
                this.setState({ allMemeImgs: memes })
            });
    }

    render() {
        return (
            <h1>MEME GENERATOR SECTION</h1>
        )
    }
}
