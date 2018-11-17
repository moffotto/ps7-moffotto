import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, Button, CardBody, CardTitle, CardText } from 'reactstrap';
import data from './cards.csv';
import { isNullOrUndefined } from 'util';

export class Mtg extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        let cards = [];

        d3.csv(data, function (data) {
            cards.push(data)
        });

        this.setState({
            data: cards
        })
    }

    render() {

        return <div className="container">

            <h2>Magic The Gathering</h2>
            <p>This is a pretty good nerdy game. Definitley suggest it if you have a spare $500 lying around and you like strategy. Drafts are pretty cool too and you don't have to spend as much. Check out some cool cards below:</p>
            <p> (Click on the 'Magic the Gathering' link at the top to display cards)</p>
            <div>
                {
                    this.state.data.map((card) => {
                        return (
                            <Card key={card.name}>
                                <CardBody>
                                    <CardTitle>
                                        {card.name}
                                    </CardTitle>
                                    <CardText>
                                        {card.description}
                                    </CardText>
                                    <a target="_blank" href={card.link}>
                                        <Button>Link to Card</Button>
                                    </a>
                                </CardBody>
                            </Card>
                        );
                    })
                }
            </div>
        </div>
    }
}
