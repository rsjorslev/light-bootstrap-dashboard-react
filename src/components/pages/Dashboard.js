import React from 'react';
import ChartistGraph from 'react-chartist';

import Card from '../dashboard/Card';
import CardHeader from '../dashboard/CardHeader';
import CardFooter from '../dashboard/CardFooter';
import CardContent from '../dashboard/CardContent';
import CardFooterLegend from '../dashboard/CardFooterLegend';
import CardFooterStats from '../dashboard/CardFooterStats';
import helpers from '../../helpers';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div>
                <div className="col-md-4">
                    <Card>
                        <CardHeader title="Email Statistics" subTitle="Last Campaign Performance"/>
                        <CardContent>
                            <ChartistGraph data={helpers.pieChartData} type={'Pie'} />
                        <CardFooter>
                            <CardFooterLegend>
                                <i className="fa fa-circle text-info" /> Open
                                <i className="fa fa-circle text-danger" /> Bounce
                                <i className="fa fa-circle text-warning" /> Unsubscribe
                            </CardFooterLegend>
                            <hr/>
                            <CardFooterStats>
                                <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                            </CardFooterStats>
                        </CardFooter>
                        </CardContent>
                    </Card>
                </div>

                <div className="col-md-8">
                    <Card>
                        <CardHeader title="Users Behavior" subTitle="24 Hours performance"/>
                        <CardContent>
                            <ChartistGraph data={helpers.dataSale} options={helpers.optionsSales} responsive-options={helpers.responsiveOptions} type={'Line'} />
                        <CardFooter>
                            <CardFooterLegend>
                                <i className="fa fa-circle text-info" /> Open
                                <i className="fa fa-circle text-danger" /> Bounce
                                <i className="fa fa-circle text-warning" /> Unsubscribe
                            </CardFooterLegend>
                            <hr/>
                            <CardFooterStats>
                                <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                            </CardFooterStats>
                        </CardFooter>
                        </CardContent>
                    </Card>
                </div>

                <div className="col-md-6">
                    <Card>
                        <CardHeader title="2014 Sales" subTitle="All products including taxes"/>
                        <CardContent>
                            <ChartistGraph data={helpers.dataCars} options={helpers.options} type={'Bar'} />
                        <CardFooter>
                            <CardFooterLegend>
                                <i className="fa fa-circle text-info" /> Open
                                <i className="fa fa-circle text-danger" /> Bounce
                                <i className="fa fa-circle text-warning" /> Unsubscribe
                            </CardFooterLegend>
                            <hr/>
                            <CardFooterStats>
                                <i className="fa fa-clock-o" /> Campaign sent 2 days ago
                            </CardFooterStats>
                        </CardFooter>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;