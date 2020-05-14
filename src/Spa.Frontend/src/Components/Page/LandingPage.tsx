import React, { ReactNode, ReactNodeArray } from 'react';
import {Helmet} from 'react-helmet';

import ContentArea from 'Episerver/Components/ContentArea';
import Property from 'Episerver/Components/Property';
import Page, { PageType } from 'Episerver/Page';

import LandingPageData from 'app/Models/Content/LandingPageData';

export default class LandingPage extends Page<LandingPageData>
{
    protected pageType = PageType.Other;

    public render() : null | ReactNode | ReactNodeArray
    {
        return [
            <Helmet key="landingpage-helmet"></Helmet>,
            <div className="container pt-3" key="landingpage-container">
                <div className="row">
                    <div className="col-12">
                        <h1><Property iContent={ this.props.data } propName="name" context={ this.getContext() } /></h1>
                    </div>
                </div>
                <ContentArea context={ this.getContext() } data={ this.props.data.topContentArea } propertyName="topContentArea" />
                <div className="row">
                    <Property iContent={ this.props.data } propName="mainBody" context={ this.getContext() } className="col-12" />
                </div>
                <ContentArea context={ this.getContext() } data={ this.props.data.mainContentArea } propertyName="mainContentArea" />
            </div>
        ];
    }
}