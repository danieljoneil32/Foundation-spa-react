import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from 'Episerver/Property'
import IContent, { BaseIContent } from 'Episerver/Models/IContent'
import ContentLink from 'Episerver/Models/ContentLink'
import { ComponentProps } from 'Episerver/EpiComponent'

/**
 * DateTimeRangeElementBlock
 *
 * No Description available.
 *
 * @GUID a4ee6053-3932-4300-8b3b-7babf9aec512
 */
export default interface DateTimeRangeElementBlockData extends IContent {
    /**
     * Label
     *
     * No description available
     */
    label: StringProperty

    /**
     * Description
     *
     * No description available
     */
    description: StringProperty

    /**
     * PickerType
     *
     * No description available
     */
    pickerType: NumberProperty

    /**
     * Validators
     *
     * No description available
     */
    validators: StringProperty

    /**
     * PlaceHolder
     *
     * No description available
     */
    placeHolder: StringProperty

    /**
     * PredefinedValue
     *
     * No description available
     */
    predefinedValue: StringProperty

    /**
     * SatisfiedAction
     *
     * No description available
     */
    satisfiedAction: StringProperty

    /**
     * External system field mapping
     *
     * No description available
     */
    forms_ExternalSystemsFieldMappings: Property<any> // Original type: Property Field Mapping Collection

    /**
     * ConditionCombination
     *
     * No description available
     */
    conditionCombination: NumberProperty

    /**
     * Conditions
     *
     * No description available
     */
    conditions: Property<any> // Original type: Dependency conditions collection

    /**
     * ValidatorMessages
     *
     * No description available
     */
    validatorMessages: Property<any> // Original type: Validator with message collection

}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface DateTimeRangeElementBlockProps extends ComponentProps<DateTimeRangeElementBlockData> {}

export class DateTimeRangeElementBlockType extends BaseIContent<DateTimeRangeElementBlockData> implements DateTimeRangeElementBlockData {
    protected _typeName : string = "DateTimeRangeElementBlock";
    /**
     * Map of all property types within this content type.
     */
    protected _propertyMap : { [propName: string]: string } = {
        'label': 'LongString',
        'description': 'LongString',
        'pickerType': 'Number',
        'validators': 'LongString',
        'placeHolder': 'LongString',
        'predefinedValue': 'LongString',
        'satisfiedAction': 'LongString',
        'forms_ExternalSystemsFieldMappings': 'Property Field Mapping Collection',
        'conditionCombination': 'Number',
        'conditions': 'Dependency conditions collection',
        'validatorMessages': 'Validator with message collection',
    }

    /**
     * Label
     *
     * No description available
     */
    public label: StringProperty;

    /**
     * Description
     *
     * No description available
     */
    public description: StringProperty;

    /**
     * PickerType
     *
     * No description available
     */
    public pickerType: NumberProperty;

    /**
     * Validators
     *
     * No description available
     */
    public validators: StringProperty;

    /**
     * PlaceHolder
     *
     * No description available
     */
    public placeHolder: StringProperty;

    /**
     * PredefinedValue
     *
     * No description available
     */
    public predefinedValue: StringProperty;

    /**
     * SatisfiedAction
     *
     * No description available
     */
    public satisfiedAction: StringProperty;

    /**
     * External system field mapping
     *
     * No description available
     */
    public forms_ExternalSystemsFieldMappings: Property<any> // Original type: Property Field Mapping Collection;

    /**
     * ConditionCombination
     *
     * No description available
     */
    public conditionCombination: NumberProperty;

    /**
     * Conditions
     *
     * No description available
     */
    public conditions: Property<any> // Original type: Dependency conditions collection;

    /**
     * ValidatorMessages
     *
     * No description available
     */
    public validatorMessages: Property<any> // Original type: Validator with message collection;

}
