import { Component } from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

class BreadCrumbs extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="breadCrumbs">
                <Link to='/'>Home</Link>
                {this.props.linkPath ?
                    <div className="breadCrumbDiv">
                        <ArrowForwardIosIcon className='breadCrumbIcon' fontSize="small" />
                        <Link to={this.props.linkPath}>{this.props.linkTitle}</Link>
                    </div>
                    : null}
                {this.props.serviceLinkPath ?
                    <div className="breadCrumbDiv">
                        <ArrowForwardIosIcon className='breadCrumbIcon' fontSize="small" />
                        <Link to={`services/${this.props.serviceLinkPath}`}>
                            {this.props.serviceLinkTitle}
                        </Link>
                    </div>
                    : null}
            </div>

        )
    }
}


export default BreadCrumbs;