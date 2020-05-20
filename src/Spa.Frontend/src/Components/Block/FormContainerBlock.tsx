import React, { ReactNode, ReactNodeArray } from 'react';

import EpiComponent from 'episerver/EpiComponent';
import Property from 'episerver/Components/Property';
import ContentArea from 'episerver/Components/ContentArea';

import BaseFormContainerBlockData from 'app/Models/Content/FormContainerBlockData';
import './FormContainerBlock.scss';

interface FormContainerBlockData extends BaseFormContainerBlockData {
    name: string
    formModel?: any
}

export default class FormContainerBlock extends EpiComponent<FormContainerBlockData> {
    render() : ReactNode | ReactNodeArray
    {
        //Render using React - Not yet fully supported by ContentDeliveryAPI
        return <div className="episerver-form">
            <div className="alert alert-warning">Episerver Forms support is experimental and incomplete!</div>
            <h3><Property context={ this.getContext() } iContent={ this.props.data } propName="title" /></h3>
            <p><Property context={ this.getContext() } iContent={ this.props.data } propName="description" /></p>
            <form>
                <ContentArea data={ this.props.data.elementsArea } propertyName="elementsArea" context={ this.getContext() } itemContentType="FormElement" noWrap />
            </form>
        </div>
    }
}