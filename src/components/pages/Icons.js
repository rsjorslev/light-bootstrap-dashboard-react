import React from 'react';

class Icons extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">202 Awesome Stroke Icons</h4>
                                <p className="category">Handcrafted by our friends from Pixeden</p>
                            </div>
                            <div className="content">
                                <div className="row">
                                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
                                        <div className="font-icon-detail"><i className="pe-7s-album"></i>
                                            <input type="text" value="pe-7s-album" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

Icons.propTypes = {};
Icons.defaultProps = {};

export default Icons;