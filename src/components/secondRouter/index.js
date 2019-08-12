import React, { Component } from 'react';
import SecondRouterCss from './index.css';
import { NavLink } from 'react-router-dom'
class SecondRouter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let { flagChange, offsetTop,offsetLeft } = this.props
        return (
            <div className={SecondRouterCss.dialogbox} style={{ top: offsetTop + 'px',left:offsetLeft+'px' }}>
                <ul onMouseLeave={() => flagChange()}>
                    {
                        this.props.routerChildren.map(item => {
                            return <NavLink key={item.id} to={item.path}><li>{item.title}</li></NavLink>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SecondRouter;