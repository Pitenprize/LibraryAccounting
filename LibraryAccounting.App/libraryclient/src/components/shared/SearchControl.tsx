import React from 'react';
import { MdSearch, MdClear } from "react-icons/md";

export interface SearchControlProps {
    placeholder: string;
    filter: Function
}

export interface SeacrchControlState {
    text: string;
    resetBtnVisible: boolean;
}

export class SearchControl extends React.Component<SearchControlProps, SeacrchControlState> {
    constructor(props: SearchControlProps) {
        super(props);

        this.state = {
            text: '',
            resetBtnVisible: false
        };
    }

    onTextChangedHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const value: string = e.target.value;
        this.setState({
            text: value,
            resetBtnVisible: value.length > 0
        });
        this.props.filter(value.trim());
    }

    onResetTextHandler() {
        this.setState({
            text: '',
            resetBtnVisible: false
        });
    }

    render() {
        return (
            <div className='search-input-wrapper'>
                <div className="icon-container">
                    <MdSearch />
                </div>

                <input type='text' className='search-input'
                    placeholder={this.props.placeholder}
                    onChange={e => this.onTextChangedHandler(e)}
                    value={this.state.text} />

                <button className='transparent-btn circle'
                    onClick={this.onResetTextHandler.bind(this)}
                    style={{ visibility: (this.state.resetBtnVisible ? 'visible' : 'hidden') }}>
                    <div className='icon-container'>
                        <MdClear />
                    </div>
                </button>
            </div >
        );
    }
}