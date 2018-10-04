import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";

export default class Button extends Component  {

    constructor(args) {
        super(args);

        this.onClick = this.onClick.bind(this);
    }


    onClick(event) {
        if (this.props.disabled) {
            event.preventDefault();
            return;
        }

        if (this.props.onClick) {
            this.props.onClick(event);
        }

    }

    render() {

        var className = '';
        var color = 'secondary';

        className = classNames(className, 'btn');
        className = classNames(className, {[`btn-${color}`]:color});



        return (
            <button className={className} onClick={this.onClick}>
                {this.props.children}
            </button>

        );
    }

};


Button.propTypes = {
    color      : PropTypes.string,
    tag        : PropTypes.string,
    onClick    : PropTypes.func,
    disabled   : PropTypes.bool
};



Button.defaultProps = {
    color    : 'primary',
    tag      : 'button',
    disabled : false
};
