import { ContentDelivery, Taxonomy, ComponentTypes } from '@episerver/spa-core'
/**
 * Bookmarks Page
 *
 * This page displays list the different content that has been bookmarked belonging to an user
 *
 * @GUID 40e76908-6aa2-4cb7-8239-607d941df3a6
 */
export default interface BookmarksPageData extends Taxonomy.IContent {
    /**
     * Categories
     *
     * Categories associated with this content.
     */
    categories: ContentDelivery.ContentReferenceListProperty

    /**
     * Teaser ratio (width-height)
     *
     * No description available
     */
    teaserRatio: ContentDelivery.StringProperty

    /**
     * Main body
     *
     * No description available
     */
    mainBody: ContentDelivery.StringProperty

    /**
     * Title
     *
     * No description available
     */
    metaTitle: ContentDelivery.StringProperty

    /**
     * Exclude from results
     *
     * This will determine whether or not to show on search
     */
    excludeFromSearch: ContentDelivery.BooleanProperty

    /**
     * Image
     *
     * No description available
     */
    pageImage: ContentDelivery.ContentReferenceProperty

    /**
     * CSS files
     *
     * No description available
     */
    cssFiles: ContentDelivery.LinkListProperty

    /**
     * Script files
     *
     * No description available
     */
    scriptFiles: ContentDelivery.LinkListProperty

    /**
     * Main content area
     *
     * No description available
     */
    mainContentArea: ContentDelivery.ContentAreaProperty

    /**
     * Keywords
     *
     * No description available
     */
    keywords: ContentDelivery.StringProperty

    /**
     * Hide site header
     *
     * No description available
     */
    hideSiteHeader: ContentDelivery.BooleanProperty

    /**
     * Video
     *
     * No description available
     */
    teaserVideo: ContentDelivery.ContentReferenceProperty

    /**
     * CSS
     *
     * No description available
     */
    css: ContentDelivery.StringProperty

    /**
     * Scripts
     *
     * No description available
     */
    scripts: ContentDelivery.StringProperty

    /**
     * Page description
     *
     * No description available
     */
    pageDescription: ContentDelivery.StringProperty

    /**
     * Hide site footer
     *
     * No description available
     */
    hideSiteFooter: ContentDelivery.BooleanProperty

    /**
     * Text
     *
     * No description available
     */
    teaserText: ContentDelivery.StringProperty

    /**
     * Content type
     *
     * No description available
     */
    metaContentType: ContentDelivery.StringProperty

    /**
     * Industry
     *
     * No description available
     */
    industry: ContentDelivery.StringProperty

    /**
     * Author
     *
     * No description available
     */
    authorMetaData: ContentDelivery.StringProperty

    /**
     * Disable indexing
     *
     * No description available
     */
    disableIndexing: ContentDelivery.BooleanProperty

    /**
     * Highlight in page list
     *
     * No description available
     */
    highlight: ContentDelivery.BooleanProperty

    /**
     * Text alignment
     *
     * No description available
     */
    teaserTextAlignment: ContentDelivery.StringProperty

    /**
     * Color theme
     *
     * No description available
     */
    teaserColorTheme: ContentDelivery.StringProperty

    /**
     * Button label
     *
     * No description available
     */
    teaserButtonText: ContentDelivery.StringProperty

    /**
     * Button theme
     *
     * No description available
     */
    teaserButtonStyle: ContentDelivery.StringProperty

    /**
     * Display hover effect
     *
     * No description available
     */
    applyHoverEffect: ContentDelivery.BooleanProperty

    /**
     * Padding
     *
     * No description available
     */
    padding: ContentDelivery.StringProperty

    /**
     * Margin
     *
     * No description available
     */
    margin: ContentDelivery.StringProperty

}

/**
 * Convenience interface for componentDidUpdate & componentDidMount methods.
 */
export interface BookmarksPageProps extends ComponentTypes.AbstractComponentProps<BookmarksPageData> {}

export class BookmarksPageType extends Taxonomy.AbstractIContent<BookmarksPageData> implements BookmarksPageData {
    protected _typeName : string = "BookmarksPage";
    /**
     * Map of all property types within this content type.
     */
    protected _propertyMap : { [propName: string]: string } = {
        'categories': 'ContentReferenceList',
        'teaserRatio': 'LongString',
        'mainBody': 'XhtmlString',
        'metaTitle': 'LongString',
        'excludeFromSearch': 'Boolean',
        'pageImage': 'ContentReference',
        'cssFiles': 'LinkCollection',
        'scriptFiles': 'LinkCollection',
        'mainContentArea': 'ContentArea',
        'keywords': 'LongString',
        'hideSiteHeader': 'Boolean',
        'teaserVideo': 'ContentReference',
        'css': 'LongString',
        'scripts': 'LongString',
        'pageDescription': 'LongString',
        'hideSiteFooter': 'Boolean',
        'teaserText': 'LongString',
        'metaContentType': 'LongString',
        'industry': 'LongString',
        'authorMetaData': 'LongString',
        'disableIndexing': 'Boolean',
        'highlight': 'Boolean',
        'teaserTextAlignment': 'LongString',
        'teaserColorTheme': 'LongString',
        'teaserButtonText': 'LongString',
        'teaserButtonStyle': 'LongString',
        'applyHoverEffect': 'Boolean',
        'padding': 'LongString',
        'margin': 'LongString',
    }

    /**
     * Categories
     *
     * Categories associated with this content.
     */
    public get categories() : BookmarksPageData["categories"] { return this.getProperty("categories"); }

    /**
     * Teaser ratio (width-height)
     *
     * No description available
     */
    public get teaserRatio() : BookmarksPageData["teaserRatio"] { return this.getProperty("teaserRatio"); }

    /**
     * Main body
     *
     * No description available
     */
    public get mainBody() : BookmarksPageData["mainBody"] { return this.getProperty("mainBody"); }

    /**
     * Title
     *
     * No description available
     */
    public get metaTitle() : BookmarksPageData["metaTitle"] { return this.getProperty("metaTitle"); }

    /**
     * Exclude from results
     *
     * This will determine whether or not to show on search
     */
    public get excludeFromSearch() : BookmarksPageData["excludeFromSearch"] { return this.getProperty("excludeFromSearch"); }

    /**
     * Image
     *
     * No description available
     */
    public get pageImage() : BookmarksPageData["pageImage"] { return this.getProperty("pageImage"); }

    /**
     * CSS files
     *
     * No description available
     */
    public get cssFiles() : BookmarksPageData["cssFiles"] { return this.getProperty("cssFiles"); }

    /**
     * Script files
     *
     * No description available
     */
    public get scriptFiles() : BookmarksPageData["scriptFiles"] { return this.getProperty("scriptFiles"); }

    /**
     * Main content area
     *
     * No description available
     */
    public get mainContentArea() : BookmarksPageData["mainContentArea"] { return this.getProperty("mainContentArea"); }

    /**
     * Keywords
     *
     * No description available
     */
    public get keywords() : BookmarksPageData["keywords"] { return this.getProperty("keywords"); }

    /**
     * Hide site header
     *
     * No description available
     */
    public get hideSiteHeader() : BookmarksPageData["hideSiteHeader"] { return this.getProperty("hideSiteHeader"); }

    /**
     * Video
     *
     * No description available
     */
    public get teaserVideo() : BookmarksPageData["teaserVideo"] { return this.getProperty("teaserVideo"); }

    /**
     * CSS
     *
     * No description available
     */
    public get css() : BookmarksPageData["css"] { return this.getProperty("css"); }

    /**
     * Scripts
     *
     * No description available
     */
    public get scripts() : BookmarksPageData["scripts"] { return this.getProperty("scripts"); }

    /**
     * Page description
     *
     * No description available
     */
    public get pageDescription() : BookmarksPageData["pageDescription"] { return this.getProperty("pageDescription"); }

    /**
     * Hide site footer
     *
     * No description available
     */
    public get hideSiteFooter() : BookmarksPageData["hideSiteFooter"] { return this.getProperty("hideSiteFooter"); }

    /**
     * Text
     *
     * No description available
     */
    public get teaserText() : BookmarksPageData["teaserText"] { return this.getProperty("teaserText"); }

    /**
     * Content type
     *
     * No description available
     */
    public get metaContentType() : BookmarksPageData["metaContentType"] { return this.getProperty("metaContentType"); }

    /**
     * Industry
     *
     * No description available
     */
    public get industry() : BookmarksPageData["industry"] { return this.getProperty("industry"); }

    /**
     * Author
     *
     * No description available
     */
    public get authorMetaData() : BookmarksPageData["authorMetaData"] { return this.getProperty("authorMetaData"); }

    /**
     * Disable indexing
     *
     * No description available
     */
    public get disableIndexing() : BookmarksPageData["disableIndexing"] { return this.getProperty("disableIndexing"); }

    /**
     * Highlight in page list
     *
     * No description available
     */
    public get highlight() : BookmarksPageData["highlight"] { return this.getProperty("highlight"); }

    /**
     * Text alignment
     *
     * No description available
     */
    public get teaserTextAlignment() : BookmarksPageData["teaserTextAlignment"] { return this.getProperty("teaserTextAlignment"); }

    /**
     * Color theme
     *
     * No description available
     */
    public get teaserColorTheme() : BookmarksPageData["teaserColorTheme"] { return this.getProperty("teaserColorTheme"); }

    /**
     * Button label
     *
     * No description available
     */
    public get teaserButtonText() : BookmarksPageData["teaserButtonText"] { return this.getProperty("teaserButtonText"); }

    /**
     * Button theme
     *
     * No description available
     */
    public get teaserButtonStyle() : BookmarksPageData["teaserButtonStyle"] { return this.getProperty("teaserButtonStyle"); }

    /**
     * Display hover effect
     *
     * No description available
     */
    public get applyHoverEffect() : BookmarksPageData["applyHoverEffect"] { return this.getProperty("applyHoverEffect"); }

    /**
     * Padding
     *
     * No description available
     */
    public get padding() : BookmarksPageData["padding"] { return this.getProperty("padding"); }

    /**
     * Margin
     *
     * No description available
     */
    public get margin() : BookmarksPageData["margin"] { return this.getProperty("margin"); }

}
