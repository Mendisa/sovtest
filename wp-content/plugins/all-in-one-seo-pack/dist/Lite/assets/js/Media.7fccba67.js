import{a as m,m as h}from"./index.f5a89b52.js";import{A as g}from"./ToolsSettings.fc44d740.js";import{n}from"./vueComponentNormalizer.58b0a173.js";import{A as $,T as f}from"./TitleDescription.2d9f1978.js";import{B as _}from"./RadioToggle.18d51233.js";import{C as v}from"./Card.9d319c36.js";import{C as b}from"./Tabs.1078c304.js";import{C as S}from"./ProBadge.d6147ee5.js";import{C as d}from"./SettingsRow.8a127375.js";import{C as y,S as T}from"./Schema.2f221e53.js";import{B as A}from"./Checkbox.93944087.js";import{C}from"./Blur.404d53ce.js";import{C as x}from"./HtmlTagsEditor.967fcae2.js";import{G as k,a as w}from"./Row.dfea53f7.js";import{R as P}from"./RequiredPlans.a8f6c47f.js";import{C as U}from"./Index.97438b3f.js";import"./isArrayLikeObject.5268a676.js";import"./default-i18n.0e73c33c.js";import"./index.d42c878d.js";import"./client.d00863cc.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./constants.9efee5f7.js";import"./portal-vue.esm.272b3133.js";import"./attachments.8194ef98.js";import"./cleanForSlug.788b395f.js";import"./Index.c9d66bbe.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./RobotsMeta.43a238ee.js";import"./GoogleSearchPreview.7b1b7765.js";import"./Tooltip.a1ab116b.js";import"./Slide.8aaa5049.js";import"./TruSeoScore.98a47fd6.js";import"./Information.d80e4486.js";import"./Textarea.2db5f910.js";import"./Checkmark.627d69a4.js";import"./Editor.9de10f9e.js";import"./UnfilteredHtml.6a533d31.js";var L=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},O=[];const R={},r={};var B=n(R,L,O,!1,D,null,null,null);function D(t){for(let s in r)this[s]=r[s]}const G=function(){return B.exports}();var I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("core-blur",[e("div",{staticClass:"aioseo-sa-image-seo"},[["caption","description"].includes("title")?e("core-settings-row",{attrs:{name:t.strings.autogenerate,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"autogenerate",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}})]},proxy:!0}],null,!1,3097604449)}):t._e(),e("core-settings-row",{attrs:{name:t.strings.attributeFormat},scopedSlots:t._u([{key:"content",fn:function(){return[e("core-html-tags-editor",{attrs:{"line-numbers":!1,single:"","tags-context":t.tags.title.context,"default-tags":t.tags.title.default},scopedSlots:t._u([{key:"tags-description",fn:function(){return[t._v(" "+t._s(t.strings.clickToAddTags)+" ")]},proxy:!0}])})]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.stripPunctuation,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"stripPunctuation",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:t.$constants.GLOBAL_STRINGS.enabled,value:!0}]}}),e("div",{staticClass:"global-robots-settings aioseo-description"},[e("strong",[t._v(t._s(t.strings.punctuationCharactersToKeep))]),e("grid-row",{staticClass:"settings"},t._l(t.stripPunctuationSettings,function(a,i){return e("grid-column",{key:i,attrs:{xl:"3",md:"4",sm:"6"}},[e("base-checkbox",{attrs:{size:"medium"}},[t._v(" "+t._s(a.label)+" ")])],1)}),1)],1)]},proxy:!0}])}),e("core-settings-row",{attrs:{name:t.strings.casing,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"casing",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"",activeClass:"dark"},{label:t.casings.lowerCase.label,value:"lower"},{label:t.casings.titleCase.label,value:"title"},{label:t.casings.sentenceCase.label,value:"sentence"}]}}),e("div",{staticClass:"aioseo-description"},[e("span",[t._v(t._s(t.strings.casingDescription))]),e("br"),e("ul",{staticClass:"casing-options"},t._l(t.casings,function(a,i){return e("li",{key:i},[e("span",[t._v(t._s(a.label))]),e("span",[t._v(t._s(a.description))])])}),0)])]},proxy:!0}])})],1)])},M=[];const E={components:{BaseCheckbox:A,BaseRadioToggle:_,CoreBlur:C,CoreHtmlTagsEditor:x,CoreSettingsRow:d,GridColumn:k,GridRow:w},data(){return{stripPunctuationSettings:[{value:"dashes",label:this.$t.__("Dashes (-)",this.$td)},{value:"underscores",label:this.$t.__("Underscores (_)",this.$td)},{value:"numbers",label:this.$t.__("Numbers (0-9)",this.$td)},{value:"plus",label:this.$t.__("Plus (+)",this.$td)},{value:"apostrophe",label:this.$t.__("Apostrophe (')",this.$td)},{value:"pound",label:this.$t.__("Pound (#)",this.$td)},{value:"ampersand",label:this.$t.__("Ampersand (&)",this.$td)}],strings:{attributeFormat:this.$t.sprintf(this.$t.__("%1$s Format",this.$td),this.$t.__("Title",this.$td)),clickToAddTags:this.$t.sprintf(this.$t.__("Click on the tags below to insert variables into your %1$s attribute.",this.$td),this.$t.__("Title",this.$td).toLowerCase()),stripPunctuation:this.$t.__("Strip Punctuation",this.$td),punctuationCharactersToKeep:this.$t.__("Punctuation Characters to Keep:",this.$td),casing:this.$t.__("Casing",this.$td),casingDescription:this.$t.__("Choose which casing should be applied to the attribute.",this.$td),wordsToStrip:this.$t.__("Words to Strip",this.$td),autogenerate:this.$t.sprintf(this.$t.__("Autogenerate %1$s on Upload",this.$td),this.$t.__("Title",this.$td))},tags:{title:{context:"imageSeoTitle",default:["image_title","separator_sa","site_title"]},altTag:{context:"imageSeoAlt",default:["alt_tag","separator_sa","site_title"]},caption:{context:"imageSeoCaption",default:["attachment_caption","separator_sa","site_title"]},description:{context:"imageSeoDescription",default:["attachment_description","separator_sa","site_title"]}},casings:{lowerCase:{label:this.$t.__("Lower Case",this.$td),description:this.$t.__("All letters are converted to lower case (small) letters.",this.$td)},titleCase:{label:this.$t.__("Title Case",this.$td),description:this.$t.__("Major words are capitalized and minor words remain in their original casing.",this.$td)},sentenceCase:{label:this.$t.__("Sentence Case",this.$td),description:this.$t.__("The first word of each sentence starts with a capital.",this.$td)}}}},props:{activeTab:Object}},o={};var F=n(E,I,M,!1,j,null,null,null);function j(t){for(let s in o)this[s]=o[s]}const N=function(){return F.exports}();var K=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-sa-image-seo"},[e("blur"),e("cta",{attrs:{"cta-link":t.$links.getPricingUrl("image-seo","image-seo-upsell"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("image-seo",null,"home"),"feature-list":t.features},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[e("required-plans",{attrs:{addon:"aioseo-image-seo"}}),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},H=[];const z={components:{Blur:N,RequiredPlans:P,Cta:U},data(){return{strings:{titleAttributeFormat:this.$t.__("Title Attribute Format",this.$td),ctaDescription:this.$t.__("The Image SEO module is a premium feature that enables you to globally control the title, alt tag, caption, description and filename of the images on your site.",this.$tdPro),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Image SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Image SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")},features:[this.$t.__("Autogenerate image attributes",this.$td),this.$t.__("Clean uploaded image filenames",this.$td),this.$t.__("Strip punctuation from image attributes",this.$td),this.$t.__("Convert casing of image attributes",this.$td)]}}},c={};var W=n(z,K,H,!1,q,"d57a7e1e",null,null);function q(t){for(let s in c)this[s]=c[s]}const l=function(){return W.exports}();var J=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div")},Q=[];const V={},u={};var X=n(V,J,Q,!1,Y,null,null,null);function Y(t){for(let s in u)this[s]=u[s]}const Z=function(){return X.exports}();var tt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-search-appearance-content-types"},[e("core-card",{attrs:{slug:`${t.postType.name}SA`},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:`${t.postType.icon||"dashicons-admin-post"}`}),e("div",{domProps:{innerHTML:t._s(t.postType.label)}})]},proxy:!0},{key:"before-tabs",fn:function(){return[e("core-settings-row",{attrs:{name:t.strings.redirectAttachmentUrls,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[e("base-radio-toggle",{attrs:{name:"redirectAttachmentUrls",options:[{label:t.$constants.GLOBAL_STRINGS.disabled,value:"disabled",activeClass:"dark"},{label:t.strings.attachment,value:"attachment"},{label:t.strings.attachmentParent,value:"attachment_parent"}]},model:{value:t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls,callback:function(a){t.$set(t.dynamicOptions.searchAppearance.postTypes.attachment,"redirectAttachmentUrls",a)},expression:"dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls"}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.attachmentUrlsDescription)+" ")])]},proxy:!0}])})]},proxy:!0},t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs.attachments,showSaveButton:!1,active:t.settings.internalTabs[`${t.postType.name}SA`],internal:""},on:{changed:function(a){return t.processChangeTab(t.postType.name,a)}}})]},proxy:!0}:null],null,!0)},[t.dynamicOptions.searchAppearance.postTypes.attachment.redirectAttachmentUrls==="disabled"?e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[`${t.postType.name}SA`],{tag:"component",attrs:{object:t.postType,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[t.postType.name],type:"postTypes"}})],1):t._e()],1),e("core-card",{attrs:{slug:"imageSeo",noSlide:!t.shouldShowMain},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",[t._v(t._s(t.strings.imageSeo))]),e("core-pro-badge")]},proxy:!0},{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs.imageSeo,showSaveButton:!1,active:t.imageSeoActiveTab.slug,internal:""},on:{changed:function(a){return t.setImageSeoActiveTab(a)}}})]},proxy:!0}])},[t.shouldShowMain?e("image-seo",{key:t.imageSeoKey,attrs:{activeTab:t.imageSeoActiveTab}}):t._e(),t.shouldShowActivate?e("activate"):t._e(),t.shouldShowUpdate?e("update"):t._e(),t.shouldShowLite?e("lite"):t._e()],1)],1)},et=[];const st={mixins:[g],components:{Activate:G,Advanced:$,BaseRadioToggle:_,CoreCard:v,CoreMainTabs:b,CoreProBadge:S,CoreSettingsRow:d,CustomFields:y,ImageSeo:l,Lite:l,Schema:T,TitleDescription:f,Update:Z},data(){return{imageSeoKey:0,addonSlug:"aioseo-image-seo",internalDebounce:!1,imageSeoActiveTab:{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},strings:{redirectAttachmentUrls:this.$t.__("Redirect Attachment URLs",this.$td),attachment:this.$t.__("Attachment",this.$td),attachmentParent:this.$t.__("Attachment Parent",this.$td),attachmentUrlsDescription:this.$t.__("We recommended redirecting attachment URLs back to the attachment since the default WordPress attachment pages have little SEO value.",this.$td),imageSeo:this.$t.__("Image SEO",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$tdPro)},tabs:{attachments:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"Schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}],imageSeo:[{slug:"title",name:this.$t.__("Title",this.$td),pro:!0},{slug:"altTag",name:this.$t.__("Alt Tag",this.$td),pro:!0},{slug:"caption",name:this.$t.__("Caption",this.$td),pro:!0},{slug:"description",name:this.$t.__("Description",this.$td),pro:!0},{slug:"filename",name:this.$t.__("Filename",this.$td),pro:!0}]}}},computed:{...m(["options","dynamicOptions","settings"]),postType(){return this.$aioseo.postData.postTypes.filter(t=>t.name==="attachment")[0]}},methods:{...h(["changeTab"]),processChangeTab(t,s){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:s}),setTimeout(()=>{this.internalDebounce=!1},50))},setImageSeoActiveTab(t){this.imageSeoActiveTab=this.tabs.imageSeo.find(s=>s.slug===t),this.imageSeoKey++}}},p={};var at=n(st,tt,et,!1,nt,null,null,null);function nt(t){for(let s in p)this[s]=p[s]}const Ht=function(){return at.exports}();export{Ht as default};