
import { Component } from "react"

export class FeedbackMarkup extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleClickGoodFeedback = () =>
        this.setState((prevState) => ({ good: prevState.good + 1 }))
    
    handleClickNeutralFeedback = () =>
        this.setState((prevState) => ({ neutral: prevState.neutral + 1 }))
    
    handleClickBadFeedback = () =>
        this.setState((prevState) => ({ bad: prevState.bad + 1 }))
     
    countTotalFeedback = () => { 
        const total = this.state.good + this.state.neutral + this.state.bad
        return total
    }
    
    countPositiveFeedbackPercentage = () => {
        if (this.state.good || this.state.neutral || this.state.bad) {
            const positiveProcent = ((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100).toFixed() + "%"
        return positiveProcent}
        
    }


    render() {
        return ( <section>
    <h1 className="">Please leave feedback</h1>
    <ul className="">
        <li className= "">
            <button type="button" onClick={this.handleClickGoodFeedback}>Good</button>
        </li>
        <li className= "">
            <button type="button" onClick={this.handleClickNeutralFeedback}>Neutral</button>
        </li>
        <li className= "">
            <button type="button" onClick={this.handleClickBadFeedback}>Bad</button>
        </li>
    </ul>
    <h2 className= "">Statistics</h2>
    <ul className="">
        <li className="">Good: <span className="">{this.state.good}</span></li>
        <li className="">Neutral: <span className="">{this.state.neutral}</span></li>
        <li className="">Bad: <span className="">{this.state.bad}</span></li>
        <li className="">Total: <span className="">{this.countTotalFeedback()}</span></li>
        <li className="">Positive feedback: <span className="">{this.countPositiveFeedbackPercentage()}</span></li>
    </ul>
    </section>)
    }
}