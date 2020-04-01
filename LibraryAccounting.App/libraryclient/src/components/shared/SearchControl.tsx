import React from 'react';
import { MdSearch, MdClear } from "react-icons/md";

export interface ISearchControlProps {
    placeholder: string;
}

export interface SeacrchControlState {
    text: string;
    resetBtnVisible: boolean;
}

export class SearchControl extends React.Component<ISearchControlProps, SeacrchControlState> {
    constructor(props: ISearchControlProps) {
        super(props);

        this.state = {
            text: '',
            resetBtnVisible: false
        };
    }

    onTextChangedHandler(e: React.ChangeEvent<HTMLInputElement>) {
        const value: string = e.target.value;

        this.setState({
            text: value.trim(),
            resetBtnVisible: value.length > 0
        });
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
                <label className='icon-container' htmlFor='search-input'>
                    <MdSearch />
                </label>

                <input type='text' className='search-input' id='search-input'
                    placeholder={this.props.placeholder}
                    onChange={e => this.onTextChangedHandler(e)}
                    value={this.state.text} />

                <button className='transparent-btn circle'
                    onClick={this.onResetTextHandler.bind(this)}
                    style={{ display: (this.state.resetBtnVisible ? 'inline-block' : 'none') }}>
                    <div className='icon-container'>
                        <MdClear />
                    </div>
                </button>
            </div >
        );
    }
}