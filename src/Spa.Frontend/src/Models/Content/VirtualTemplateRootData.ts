import Property, {StringProperty, NumberProperty, BooleanProperty, ContentReferenceProperty, ContentAreaProperty, LinkListProperty, LinkProperty} from 'episerver/Property'
import IContent, { BaseIContent } from 'episerver/Models/IContent'
import ContentLink from 'episerver/Models/ContentLink'
import { ComponentProps } from 'episerver/EpiComponent'

/**
 * Virtual template root
 *
 * The root where all virtual templates are saved
 *
 * @GUID 2c25988a-ab55-49db-a248-ede870db2d9d
 */
export default interface VirtualTemplateRootData extends IContent {
}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface VirtualTemplateRootProps extends ComponentProps<VirtualTemplateRootData> {}

export class VirtualTemplateRootType extends BaseIContent<VirtualTemplateRootData> implements VirtualTemplateRootData {
    protected _typeName : string = "VirtualTemplateRoot";
    /**
     * Map of all property types within this content type.
     */
    protected _propertyMap : { [propName: string]: string } = {
    }

}
