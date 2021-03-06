import React from 'react';
import { EffectNine, EffectTwo, EffectThree, EffectFive, EffectSix, EffectSeven } from './index';

export class Event extends React.Component {
    renderEffectOne(i, j) {
        return (<EffectNine onClick={() => this.props.effectOneClick(1 - i, j)} value={this.props.hand[1 - i][j]} />);
    }
    renderEffectTwo(i, option) {
        return (<EffectTwo onClick={() => this.props.effectTwoClick(i, option)} value={option} />);
    }
    renderEffectThree(i) {
        return (<EffectThree onClick={() => this.props.next()} value={this.props.hand[1 - i][0]} />);
    }
    renderEffectFive(i, j) {
        return (<EffectFive onClick={() => this.props.effectFiveClick(1 - i, j)} value={j} />);
    }
    renderEffectSix() {
        return (<EffectSix onClick={() => this.props.effectSixClick()} />);
    }
    renderEffectSeven(i, option) {
        return (<EffectSeven onClick={() => this.props.effectSevenClick(i, option)} value={this.props.deck[option]} />);
    }
    renderEffectNine(i, j) {
        return (<EffectNine onClick={() => this.props.effectNineClick(1 - i, j)} value={this.props.hand[1 - i][j]} />);
    }

    componentDidMount() {
        const event = this.props.event
        const array = [1, 3, 9]
        if (array.includes(event)) {
            this.props.openCom(true)
        }
    }

    componentWillUnmount() {
        this.props.openCom(false)
    }

    render() {
        const i = 0
        if (this.props.event === 1) {
            return (
                <div>
                    <h3>①少年</h3>
                    <p>捨てさせるカードを選択</p>
                </div>
            );
        }
        if (this.props.event === 2) {
            return (
                <div>
                    <h3>②兵士</h3>
                    <p>COMのカードを当てる</p>
                    <div>
                        {this.renderEffectTwo(i, "1")}
                        {this.renderEffectTwo(i, "2")}
                        {this.renderEffectTwo(i, "3")}
                        {this.renderEffectTwo(i, "4")}
                        {this.renderEffectTwo(i, "5")}
                    </div>
                    <div>
                        {this.renderEffectTwo(i, "6")}
                        {this.renderEffectTwo(i, "7")}
                        {this.renderEffectTwo(i, "8")}
                        {this.renderEffectTwo(i, "9")}
                        {this.renderEffectTwo(i, "10")}
                    </div>
                </div>
            );
        }
        if (this.props.event === 3) {
            return (
                <div>
                    <h3>③占師</h3>
                    <p>COMのカードを確認</p>
                    <div>
                        {this.renderEffectThree(i)}
                    </div>
                </div>
            );
        }
        if (this.props.event === 5) {
            return (
                <div>
                    <h3>⑤死神</h3>
                    <p>捨てさせるカードを選択</p>
                </div>
            );
        }
        if (this.props.event === 6) {
            return (
                <div>
                    {this.renderEffectSix()}
                </div>
            );
        }
        if (this.props.event === 7) {
            return (
                <div>
                    <h3>⑦賢者</h3>
                    <p>手札に加えるカードをを選択</p>
                    <div>
                        {this.renderEffectSeven(i, 0)}
                        {this.renderEffectSeven(i, 1)}
                        {this.renderEffectSeven(i, 2)}
                    </div>
                </div>
            );
        }
        if (this.props.event === 9) {
            return (
                <div>
                    <h3>⑨皇帝</h3>
                    <p>捨てさせるカードを選択</p>
                </div>
            );
        }
    }
}
