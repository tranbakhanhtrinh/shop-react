import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionType from '../../../store/actions/home';

import classes from './CMS.module.scss';

class CMS extends Component {

    componentDidMount() {
        this.props.onFetchHome();
        // console.log(this.props)
    }

    render() {
        const { gv, hd, ha } = {
            gv: { ...this.props.giangvien },
            hd: { ...this.props.header },
            ha: { ...this.props.hinhanh }
        }
        const img = Object.values({ ...ha.img });
        console.log(ha.des);
        // const hinh = img.map((i, index) => {
        //     return (
        //         <div key={index}>
        //             {i}
        //         </div>
        //     )
        // })
        // console.log(hinh);

        return (
            <div className={classes.CMS}>
                <div className={classes.LeftMenuBar}>
                    {gv.des}
                </div>
                <div className={classes.Body}>
                    {hd.des} <br />
                    {/* {hinh} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        giangvien: state.giangvien,
        header: state.header,
        hinhanh: state.hinhanh,
        loading: state.loading
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHome: () => dispatch(actionType.fetchHome())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CMS);