/*!CK:3257279575!*//*1417412857,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+rkrA"]); }

__d("PagesEventType",[],function(a,b,c,d,e,f){e.exports={NAV_VIEW_BUILD_AUDIENCE:"nav_view_build_audience",NAV_VIEW_HELP:"nav_view_help",NAV_VIEW_CREATE_AD:"nav_view_create_ad",VIEW_NOTIFICATIONS_PAGE:"view_notifications_page",VIEW_MESSAGES:"view_messages",VIEW_SCHEDULED_POSTS:"view_scheduled_posts",VIEW_DRAFT_POSTS:"view_draft_posts",VIEW_PAGES_FEED:"view_pages_feed",MESSAGES_TAB_INBOX:"messages_tab_inbox",MESSAGES_TAB_ARCHIVED:"messages_tab_archived",MESSAGES_TAB_SPAM:"messages_tab_spam",MESSAGES_TAB_OTHER:"messages_tab_other",MESSAGES_DIALOG_SEND:"messages_dialog_send",MESSAGES_DIALOG_GOTMESSAGES:"messages_dialog_gotmessages",REALTIME_PAYLOAD_FLUSH:"realtime_payload_flush",REALTIME_PAYLOAD_DELIVER:"realtime_payload_deliver",VIEW_STORIES_TO_SHARE:"view_stories_to_share",CUSTOM_CTA_VIEW_CREATE:"custom_cta_view_create",CUSTOM_CTA_VIEW_EDIT:"custom_cta_view_edit",CUSTOM_CTA_VIEW_DELETE:"custom_cta_view_delete",CUSTOM_CTA_CHANGE_CTA_TYPE:"custom_cta_change_cta_type",CUSTOM_CTA_CHANGE_WEB_LINK:"custom_cta_change_web_link",CUSTOM_CTA_CHANGE_MOBILE_LINK:"custom_cta_change_mobile_link",CUSTOM_CTA_CHANGE_IPHONE_DESTINATION_TYPE:"custom_cta_change_ios_destination_type",CUSTOM_CTA_CHANGE_IPHONE_DEEPLINK:"custom_cta_change_ios_deeplink",CUSTOM_CTA_CHANGE_IPHONE_LINK:"custom_cta_change_ios_backup_link",CUSTOM_CTA_CHANGE_ANDROID_DESTINATION_TYPE:"custom_cta_change_android_destination_type",CUSTOM_CTA_CHANGE_ANDROID_PACKAGE_NAME:"custom_cta_change_android_package_name",CUSTOM_CTA_CHANGE_ANDROID_DEEPLINK:"custom_cta_change_android_deeplink",CUSTOM_CTA_CHANGE_ANDROID_LINK:"custom_cta_change_android_backup_link",CUSTOM_CTA_CLICK_CTA_DROPDOWN:"custom_cta_click_cta_dropdown",CUSTOM_CTA_CLICK_VIEWER_UNIT:"custom_cta_click_viewer_unit",CUSTOM_CTA_CLICK_NEXT_BUTTON:"custom_cta_click_next_button",CUSTOM_CTA_CLICK_BACK_BUTTON_ON_DIALOG:"custom_cta_click_back_button_on_dialog",CUSTOM_CTA_SAVE_SECTION:"custom_cta_save_section",CUSTOM_CTA_CLICK_CREATE_BUTTON:"custom_cta_click_create_button",CUSTOM_CTA_CLICK_DELETE:"custom_cta_click_delete",CUSTOM_CTA_CLICK_TEST_LINK:"custom_cta_click_test_link",CUSTOM_CTA_CLICK_EDIT_MENU:"custom_cta_click_edit_menu",CUSTOM_CTA_CLICK_SAVE_EDIT:"custom_cta_click_save_edit",CUSTOM_CTA_CLICK_PROMOTE_MENU:"custom_cta_click_promote_menu",POST_DETAIL_VIEW:"post_detail_view"};},null);
__d("AdsCFCreativeProperties",["AdCreativeType","AdsApplicationUtils","AdsUtils","adsGKCheck","getObjectValues"],function(a,b,c,d,e,f,g,h,i,j,k){var l={STORY_APP_SHARE:{id:g.keyToType.STORY_APP_SHARE.id,validFields:['objectId','urlTags']},STORY_APP_USED:{id:g.keyToType.STORY_APP_USED.id,validFields:['objectId','urlTags']},STORY_PAGE_LIKE:{id:g.keyToType.STORY_PAGE_LIKE.id},STORY_PAGE_POST:{id:g.keyToType.STORY_PAGE_POST.id},STORY_CHECKIN:{id:g.keyToType.STORY_CHECKIN.id},STORY_DOMAIN_SHARE:{id:g.keyToType.STORY_DOMAIN_SHARE.id,validFields:['objectId','urlTags']},STORY_QUERY_BASED:{id:g.keyToType.STORY_QUERY_BASED.id,validFields:['objectId','urlTags']},AD_EXTERNAL_URL:{id:g.keyToType.AD_EXTERNAL_URL.id,validFields:['title','body','linkUrl','imageList','relatedFanPage','videoId','videoThumbnail','isVideoCreative'],requiredFields:['title','body','linkUrl','MULTI_IMAGE']},FEED_URL:{id:g.keyToType.FEED_URL.id,validFields:['actor','title','body','linkUrl','linkCaption','linkDescription','callToActionType','getDirectionsUrl','imageList','storyId','videoId','videoThumbnail','isVideoCreative'],requiredFields:['actor','title','body','linkUrl','MULTI_IMAGE']},AD_FAN_LIKE:{id:g.keyToType.AD_FAN_LIKE.id,validFields:['objectId','title','body','linkUrl','imageList'],requiredFields:['objectId','body','MULTI_IMAGE']},AD_EVENT_RSVP:{id:g.keyToType.AD_EVENT_RSVP.id,validFields:['objectId','body','imageList'],requiredFields:['objectId','body']},AD_APPLICATION:{id:g.keyToType.AD_APPLICATION.id,validFields:['objectId','title','body','imageList','linkUrl','urlTags'],requiredFields:['objectId','body','MULTI_IMAGE']},AD_PAGE_POST:{id:g.keyToType.AD_PAGE_POST.id,validFields:['objectId','storyId','urlTags']},MOBILE_APP_INSTALL:{id:g.keyToType.MOBILE_APP_INSTALL.id,validFields:['objectId','title','body','iconImage','imageList','mobileStore','videoId','applinkUrl','mobileProductName','callToActionType','urlTags','linkUrl'],requiredFields:['objectId','MULTI_IMAGE']},NEKO_LPP:{id:g.keyToType.NEKO_LPP.id,validFields:['actor','applinkUrl','body','callToActionType','imageList','linkUrl','platform','storyId','title','urlTags','videoId','videoThumbnail','isVideoCreative','productLinkUrl'],requiredFields:['actor','linkUrl','MULTI_IMAGE_OR_VIDEO']}};if(j('ads_cf_video_objective'))l.AD_VIDEO={id:g.keyToType.AD_VIDEO.id,validFields:['actor','body','callToActionLink','callToActionLinkCaption','callToActionType','isVideoCreative','videoId','videoThumbnail'],requiredFields:['actor','body','videoId','videoThumbnail']};if(!h.isCampaignManager()){l.AD_EVENT_RSVP.validFields.push('actor','linkUrl');l.AD_EVENT_RSVP.requiredFields.push('actor','linkUrl');}else{l.AD_EVENT_RSVP.validFields.push('title');l.AD_EVENT_RSVP.requiredFields.push('MULTI_IMAGE');}var m=i.indexedMap(k(l),'id'),n={idToType:m,keyToType:l,requiredFieldsForType:function(o){var p=m[o],q=p?p.requiredFields:(void 0);if(q)return q;p=g.idToType[o];return p?p.requiredFields||[]:[];}};e.exports=n;},null);
__d("Alignment",["DOMVector","Style","containsNode","copyProperties","invariant"],function(a,b,c,d,e,f,g,h,i,j,k){function l(n,o,p){"use strict";this.$Anchor0=o;this.$Anchor1=p;this.$Anchor2=n;}l.prototype.getElement=function(){"use strict";return this.$Anchor2;};l.prototype.getX=function(){"use strict";return this.$Anchor0;};l.prototype.getY=function(){"use strict";return this.$Anchor1;};l.prototype.isCorner=function(){"use strict";return ((this.$Anchor0===l.LEFT||this.$Anchor0===l.RIGHT)&&(this.$Anchor1===l.TOP||this.$Anchor1===l.BOTTOM));};l.prototype.getPosition=function(n){"use strict";return g.getElementPosition(this.$Anchor2,n).add(this.getX()*this.$Anchor2.offsetWidth,this.getY()*this.$Anchor2.offsetHeight);};j(l,{LEFT:0,CENTER:.5,RIGHT:1,TOP:0,MIDDLE:.5,BOTTOM:1});function m(n,o,p){"use strict";this.$Alignment0=n;this.$Alignment1=o;this.$Alignment2=p;k(i(n.getElement(),o.getElement()));k(n.isCorner());}m.prototype.align=function(){"use strict";m.$Alignment3(this.$Alignment0,function(){return m.measure(this.$Alignment1,this.$Alignment2);}.bind(this));};m.$Alignment3=function(n,o){"use strict";var p=n.getElement();h.apply(p,{left:n.getX()===l.LEFT?'0':'',right:n.getX()===l.RIGHT?'0':'',top:n.getY()===l.TOP?'0':'',bottom:n.getY()===l.BOTTOM?'0':''});var q=o();if(n.getX()===l.LEFT){h.set(p,'left',q.x+'px');}else if(n.getX()===l.RIGHT)h.set(p,'right',-q.x+'px');if(n.getY()===l.TOP){h.set(p,'top',q.y+'px');}else if(n.getY()===l.BOTTOM)h.set(p,'bottom',-q.y+'px');};m.position=function(n,o){"use strict";m.$Alignment3(n,function(){var p=g.getElementPosition(n.getElement());return o.convertTo('document').sub(p);});};m.measure=function(n,o){"use strict";var p=n.getPosition('document'),q=o.getPosition('document');return q.sub(p);};m.Anchor=l;e.exports=m;},null);
__d("CIWebmailValidator",["AsyncRequest","URI"],function(a,b,c,d,e,f,g,h){var i,j=false,k=false,l=[];function m(o){var p=o.tokens;delete o.tokens;for(var q in o){var r=o[q];for(var s in p){if(!p.hasOwnProperty(s))continue;var t=s.replace(/([.?*+\^$\[\]\\(){}\-])/g,"\\$1"),u=new RegExp(t,"g");r=r.replace(u,p[s]);}o[q]=r;}i=o;j=true;while(l.length>0)(l.shift())();}var n={flow:null,useCase:null,hasFullMapping:function(){return j;},init:function(o,p,q){if(!j&&!k)i=o;this.flow=p;this.useCase=q;},isValidEmail:function(o){var p=new RegExp("[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+(?:\\.[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?");return p.test(o);},getDomain:function(o){var p=o.split('@');return p[1];},getDomainImporterName:function(o){var p=['msft','yahoo','gmail','yahoo_jp','ezweb_jp','other'],q=o.split(/\./);for(var r=0;r<q.length-1;r++){var s=q.slice(r).join('.');s='|'+s.toLowerCase();for(var t=0;t<p.length;t++){var u=p[t];if(i[u].indexOf(s)!=-1)return u;}}return null;},getImporterName:function(o){return this.getDomainImporterName(this.getDomain(o));},isLiveDomain:function(o){return this.getImporterName(o)=='msft';},isGmailDomain:function(o){return this.getImporterName(o)=='gmail';},isYahooDomain:function(o){return this.getImporterName(o)=='yahoo';},isYahooJpDomain:function(o){return this.getImporterName(o)=='yahoo_jp';},isSupportedDomain:function(o){var p=this.getDomainImporterName(this.getDomain(o));return p!=null;},downloadDomainMapping:function(o){if(j)return;if(o)l.push(o);var p=h('/contact_importer/ajax/get_domains.php').addQueryData({flow:this.flow,use_case:this.useCase});if(!k){k=true;new g().setURI(p).setMethod('GET').setReadOnly(true).setHandler(function(q){var r=q.getPayload();m(r);}).send();}},setDomainMapping:function(o){m(o);}};e.exports=n;a.CIWebmailValidator=n;},null);
__d("MercuryThrottler",["Map","MercurySingletonMixin","emptyFunction","invariant"],function(a,b,c,d,e,f,g,h,i,j){'use strict';var k={NORMAL:0,QUEUEING:1,FLUSHING:2};function l(m){this.$MercuryThrottler0=m;this.$MercuryThrottler1=new g();this.$MercuryThrottler2=Date.now();this.$MercuryThrottler3=0;this.$MercuryThrottler4=k.NORMAL;this.$MercuryThrottler5=0;}l.prototype.setMinThresholdDuration=function(m){this.$MercuryThrottler3=m;};l.prototype.setQueueResetDuration=function(m){this.$MercuryThrottler5=m;};l.prototype.registerHandlerType=function(m,n,o,p){if(!o)o=i.thatReturns;this.$MercuryThrottler1.set(m,{handler:n,instance:p,perBatchPostProcessHandler:o,queuedPayloads:[]});};l.prototype.$MercuryThrottler6=function(){this.$MercuryThrottler4=k.FLUSHING;this.$MercuryThrottler1.forEach(function(m,n,o){var p={fbid:this.$MercuryThrottler0,type:n,flushed_message_count:m.queuedPayloads.length,min_threshold_duration:this.$MercuryThrottler3,queue_reset_duration:this.$MercuryThrottler5};m.queuedPayloads.map(this.notifyHandler,this);m.perBatchPostProcessHandler({flushMetrics:p});m.queuedPayloads=[];},this);this.$MercuryThrottler4=k.NORMAL;};l.prototype.$MercuryThrottler7=function(){if(this.$MercuryThrottler4===k.NORMAL){var m=(Date.now()-this.$MercuryThrottler2);if(m<this.$MercuryThrottler3){this.$MercuryThrottler4=k.QUEUEING;setTimeout(this.$MercuryThrottler6.bind(this),this.$MercuryThrottler5);}}this.$MercuryThrottler2=Date.now();};l.prototype.notifyHandler=function(m){var n=m.type,o=m.payload;j(this.$MercuryThrottler1.has(n));var p=this.$MercuryThrottler1.get(n);this.$MercuryThrottler7();switch(this.$MercuryThrottler4){case k.NORMAL:case k.FLUSHING:p.handler.call(p.instance,n,o);break;case k.QUEUEING:p.queuedPayloads.push({type:n,payload:o});break;default:j(false);}if(this.$MercuryThrottler4===k.NORMAL)p.perBatchPostProcessHandler({});};Object.assign(l,h);e.exports=l;},null);
__d("PagesManagerMessagesInterface",["ge","Animation","Arbiter","AsyncRequest","CSS","DOM","Event","fbt","PagesMessagingConst"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p={init:function(q,r,s,t,u,v){m.listen(q,'click',function(){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'markAllRead',pageid:u,folder:v,is_page:true}).setHandler(function(){this.notifyUpdateCompleted();}.bind(this)).send();}.bind(this));m.listen(r,'click',function(){k.toggleClass(q,'hidden_elem');k.toggleClass(s,'hidden_elem');});m.listen(s,'submit',function(){t.blur();});},applyIfVisibleOnPage:function(q,r){var s=g(q);if(s)r(s);},changeThreadSpamStatus:function(q,r,s){new j().setURI(o.ASYNC_ENDPOINT).setData({action:(s?'reportSpam':'unmarkSpam'),pageid:q,tids:r,is_page:true}).send();this.applyIfVisibleOnPage(r,this.hideElement);},changeThreadArchivedStatus:function(q,r,s,t){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'tag',tag:'action:archived',state:(s?1:0),broadcast:true,pageid:q,tids:[r],is_page:true,placement:t}).send();this.applyIfVisibleOnPage(r,function(u){k.addClass(u,'archived');this.hideElement(u);}.bind(this));},changeThreadReadStatus:function(q,r,s,t){new j().setURI(o.ASYNC_ENDPOINT).setData({action:(s?'markRead':'markUnread'),pageid:q,tids:[r],is_page:true,placement:t}).send();var u=(s?k.removeClass:k.addClass);this.applyIfVisibleOnPage(r,function(v){u(v,'unread');});},hideElement:function(q){new h(q).to('opacity',0).duration(150).hide().go();},deleteMessages:function(q,r,s,t,u){var v=new j(),w={action:(q?'delete':'deleteMessages'),pageid:t,is_page:true};w['delete']=(q?'Delete Conversation':'Delete Messages');if(q){w.tids=u;}else{w.folder='inbox';w.mids=Object.keys(r);}v.setURI(o.ASYNC_ENDPOINT);v.setHandler(function(x){s();});v.setData(w);v.send();},notifyUpdateCompleted:function(){i.inform('PagesManagerLayout/refreshSection',{section:'messages'});},showMessageThread:function(q,r,s,t,u){var v=l.create('div');l.appendContent(document.body,v);new j().setURI(o.LOAD_MESSAGE_THREAD_URI).setData({folder:t,pageid:q,source:u,threadElementID:s,threadid:r}).setRelativeTo(v).send();},updateUnreadCount:function(q){i.inform('pagesManagerMessaging/messageUnreadCountUpdated',{metricCount:q});i.inform('PagesManagerLayout/updateCount',{count:q,section:'messages'});i.inform('PagesManagerLayout/updateCount',{count:q,section:'messages',subsection:'inbox'});var r=g('pageUnreadMessageCount');if(r){var s='';if(q>0)s=(q===1)?n._("{number unread messages} Unread",[n.param("number unread messages",q)]):n._("{number unread messages} Unread",[n.param("number unread messages",q)]);l.setContent(r,s);}},updatePreferences:function(q){new j().setURI(o.ASYNC_ENDPOINT).setData({action:'setPreferences',send_on_enter:q.sendOnEnter}).send();}};e.exports=p;},null);
__d("PagesManagerNavbar",["Arbiter","ChannelConstants","CSS","Event","MercuryThreadInformer","MercuryThrottler","MercuryUnreadState","MessagingTag","PagesBanzaiLogger","PagesManagerMessagesInterface","PagesEventType","Vector","ViewportBounds","copyProperties","cx","getStyleProperty","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){var x={init:function(y,z,aa,ba,ca,da,ea,fa){this._setupStickyAreaAndDropshadow(z);var ga=g.subscribe('page_transition',function(){ga.unsubscribe();this._setupStickyAreaAndDropshadow(z);}.bind(this));if(aa){this._messageCount=ba;this._notificationCount=ca;this._activityCountBadge=aa;w(g.subscribe('pagesManagerMessaging/messageUnreadCountUpdated',function(ha,ia){this._messageCount=ia.metricCount;this._updateActivityCount();}.bind(this)));this._registerUnreadUpdates(y,ea,fa,da);}},initLogging:function(y,z,aa,ba){if(z)j.listen(z,'click',function(){var ca=t({},y);ca.event_name=q.NAV_VIEW_BUILD_AUDIENCE;o.logData(ca);});j.listen(aa,'click',function(){var ca=t({},y);ca.event_name=q.NAV_VIEW_HELP;o.logData(ca);});if(ba)j.listen(ba,'click',function(){var ca=t({},y);ca.event_name=q.NAV_VIEW_CREATE_AD;o.logData(ca);});},initCaret:function(y){g.subscribe('Hubble/loaded',function(){i.addClass(y,"_4iro");});},notifyNotificationsSeen:function(){this._notificationCount=0;this._updateActivityCount();},throttleQueueFlushLog:function(y){var z=y.flushMetrics;if(z)o.logData({page_id:z.fbid,event_name:q.REALTIME_PAYLOAD_FLUSH,payload_type:z.type,message_count:z.flushed_message_count,min_threshold_duration:z.min_threshold_duration,queue_reset_duration:z.queue_reset_duration});},realtimePayloadDeliveredLog:function(y){var z=y.pageId,aa=y.type;o.logData({page_id:z,event_name:q.REALTIME_PAYLOAD_DELIVER,payload_type:aa});},_registerUnreadUpdates:function(y,z,aa,ba){var ca=h.getArbiterType('pages_inbox_count_update'),da='unread-updated',ea=l.getForFBID(y);ea.setMinThresholdDuration(z);ea.setQueueResetDuration(aa);if(ba){ea.registerHandlerType(da,function(ha,ia){var ja=ga.getUnreadCount(n.INBOX);p.updateUnreadCount(ja);this.realtimePayloadDeliveredLog({pageId:y,type:ha});}.bind(this),this.throttleQueueFlushLog);var fa=k.getForFBID(y),ga=m.getForFBID(y);fa.subscribe(da,function(ha,ia){return ea.notifyHandler({type:ha,payload:ia});});}else{ea.registerHandlerType(ca,function(ha,ia){p.updateUnreadCount(ia.inbox_unread);this.realtimePayloadDeliveredLog({pageId:y,type:ha});}.bind(this),function(ha){g.inform('PagesManagerLayout/refreshSection',{section:'messages'});this.throttleQueueFlushLog(ha);}.bind(this));w(g.subscribe(ca,function(ha,ia){return l.getForFBID(ia.page_id).notifyHandler({type:ha,payload:ia});}));}},_setupStickyAreaAndDropshadow:function(y){if(this._instance==y)return;this._instance=y;y.setOffset(s.getTop());var z=y._node.firstChild,aa=parseInt(v(z,'marginBottom'),10)+1;this._event=w(j.listen(window,'scroll',function(){y.setOffset(s.getTop());i.conditionClass(z,"_c7_",r.getScrollPosition().y>aa);}));},_updateActivityCount:function(){var y=this._messageCount+this._notificationCount;this._activityCountBadge&&this._activityCountBadge.setCount(y);}};e.exports=x;},null);
__d("StickyArea",["CSS","DOM","DOMDimensions","DOMQuery","Event","Run","Style","UserAgent_DEPRECATED","ViewportBounds","copyProperties","cx","getOverlayZIndex","removeFromArray","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=[],v=null,w=null,x=null,y=t.acrossTransitions(z,1000);function z(){u.sort(function(fa,ga){var ha=fa.getNode(),ia=ga.getNode();if(ha.compareDocumentPosition){return 3-(ha.compareDocumentPosition(ia)&6);}else return ha.sourceIndex-ia.sourceIndex;});}function aa(fa,ga){if(!fa){return 0;}else if(ga.right<=fa.rect.left){return aa(fa.prev,ga);}else if(ga.left>=fa.rect.right){return aa(fa.prev,ga);}else return fa.top;}function ba(){var fa=document.documentElement.getBoundingClientRect(),ga=i.getDocumentDimensions(),ha=fa.width-fa.left,ia=0;if(fa.left>0){ia=-fa.left;}else if(ha>ga.width)ia=ha-ga.width;return ia;}function ca(){var fa=document.documentElement.getBoundingClientRect(),ga=0;if(fa.top>0)ga=-fa.top;return ga;}function da(){var fa=0,ga=u.length,ha=100,ia=ba(),ja=ca();function ka(la,ma){var na=ha;while(fa<ga){var oa=u[fa],pa=oa.getNode();if(ma&&!j.contains(ma,pa))break;ha=Math.max(na,oa.getZIndex());var qa=oa.getData(),ra=oa.getOffset(),sa=pa.parentNode,ta=qa.styles,ua,va,wa=oa.getPlaceholder();va=qa.fixed?wa.getBoundingClientRect():pa.getBoundingClientRect();ua=aa(la,va);if(va.top+ja<=ua+ra){var xa=va.bottom-va.top,ya=va.right-va.left;if(xa!==qa.placeholderHeight){m.set(wa,'height',xa+'px');qa.placeholderHeight=xa;}if(ya!==qa.placeholderWidth){m.set(wa,'width',ya+'px');qa.placeholderWidth=ya;}ta.width=(va.right-va.left)+'px';var za=parseInt(m.get(sa,'padding-bottom'),10),ab=sa.getBoundingClientRect();if(ab.bottom-za>ua+ra+xa){if(qa.needParentReset){m.set(sa,'position','');qa.needParentReset=false;}ta.position='fixed';ta.bottom='auto';ta.top=(ua+ra)+'px';ta.left=(va.left+ia)+'px';}else{if(!qa.parent||sa!==qa.parent){if(m.get(sa,'position')==='static'){m.set(sa,'position','relative');qa.needParentReset=n.ie()===7;}qa.parent=sa;}ta.position='absolute';ta.top='auto';ta.bottom=za+'px';var bb=parseInt(m.get(sa,'border-left-width'),10);ta.left=(va.left-ab.left-bb)+'px';}if(!qa.fixed){h.insertAfter(pa,wa);g.show(wa);m.set(wa,'float',m.get(pa,'float'));qa.fixed=true;}}else if(qa.fixed){for(var cb in ta)ta[cb]='';g.hide(wa);qa.fixed=false;}fa++;ka({top:ua+ra+(va.bottom-va.top),prev:la,rect:va},sa);ta.zIndex=ha++;m.apply(pa,ta);}}ka();}function ea(fa,ga,ha){"use strict";this._node=fa;this._data={styles:{}};this._offset=ha;g.addClass(fa,"_k");if(!ga)l.onLeave(this.destroy.bind(this));if(!u.length){v=k.listen(window,'scroll',function(){y();da();});w=k.listen(window,'resize',function(){y();da();});x=o.subscribe('change',function(){y();da();});}u.push(this);ea.reflow();}ea.prototype.destroy=function(){"use strict";s(u,this);if(!u.length){v.remove();v=null;w.remove();w=null;}if(this._placeholder)h.remove(this._placeholder);var fa=0;for(var ga in this._data.styles){this._data.styles[ga]='';fa++;}if(fa)m.apply(this._node,this._data.styles);};ea.prototype.getData=function(){"use strict";return this._data;};ea.prototype.getNode=function(){"use strict";return this._node;};ea.prototype.getOffset=function(){"use strict";return this._offset||0;};ea.prototype.getPlaceholder=function(){"use strict";if(!this._placeholder)this._placeholder=h.create('div');return this._placeholder;};ea.prototype.getZIndex=function(){"use strict";if(!this._zIndex)this._zIndex=r(this._node);return this._zIndex;};ea.prototype.setOffset=function(fa){"use strict";this._offset=fa;};p(ea,{reflow:t.acrossTransitions(function(){z();da();},100)});e.exports=ea;},null);
__d("SingleSelectorBase",["ArbiterMixin","Alignment","BehaviorsMixin","Button","CSS","DOM","DOMQuery","Event","Layer","ParameterizedPopover","PopoverMenu","SelectableMenuUtils","Style","csx","cx","getOverlayZIndex","invariant","merge","mixin","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){var aa=h.Anchor,ba=16,ca=y(g,i);for(var da in ca)if(ca.hasOwnProperty(da))fa[da]=ca[da];var ea=ca===null?null:ca.prototype;fa.prototype=Object.create(ea);fa.prototype.constructor=fa;fa.__superConstructor__=ca;function fa(ga,ha,ia,ja){"use strict";this.$SingleSelectorBase0=ga;this.$SingleSelectorBase1=null;this.$SingleSelectorBase2=l.create('div',{});this.$SingleSelectorBase3=new o({classNames:["_5xew"]},this.$SingleSelectorBase2);this.$SingleSelectorBase4=new p(ga.parentNode,ga,[],x(ia,{layer:this.$SingleSelectorBase3}));this.$SingleSelectorBase4.subscribe('show',this.$SingleSelectorBase5.bind(this));this.$SingleSelectorBase4.subscribe('hide',this.$SingleSelectorBase6.bind(this));this.$SingleSelectorBase7=new q(this.$SingleSelectorBase4,ga,ha,[]);this.setMenu(ha);if(ja&&ja.behaviors)this.enableBehaviors(ja.behaviors);}fa.prototype.$SingleSelectorBase5=function(){"use strict";this.$SingleSelectorBase8();this.$SingleSelectorBase9();k.conditionClass(this.$SingleSelectorBase3.getRoot(),"_5xex",this.$SingleSelectorBasea());s.set(this.$SingleSelectorBase3.getRoot(),'min-width',(this.$SingleSelectorBase0.offsetWidth+ba)+'px');var ga=l.scry(this.$SingleSelectorBase2,'div.uiScrollableAreaWrap')[0];if(ga){var ha=h.measure(new aa(this.$SingleSelectorBaseb(),aa.LEFT,aa.MIDDLE),new aa(this.$SingleSelectorBase1.getRoot(),aa.LEFT,aa.MIDDLE));ga.scrollTop-=ha.y;}this.align();this.getSelectedItem().focus();if(!this.$SingleSelectorBasec)this.$SingleSelectorBasec=n.listen(window,'resize',z(this.align.bind(this)));this.inform('show');};fa.prototype.$SingleSelectorBase6=function(){"use strict";if(this.$SingleSelectorBasec){this.$SingleSelectorBasec.remove();this.$SingleSelectorBasec=null;}this.inform('hide');};fa.prototype.$SingleSelectorBased=function(ga,ha){"use strict";this.$SingleSelectorBasef=null;if(!this.$SingleSelectorBaseg)this.inform('change',ha);};fa.prototype.setValue=function(ga){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBaseh(ga,false);}else{this.$SingleSelectorBasei=ga;this.$SingleSelectorBasej=false;}};fa.prototype.setValueWithoutChange=function(ga){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBaseh(ga,true);}else{this.$SingleSelectorBasei=ga;this.$SingleSelectorBasej=true;}};fa.prototype.$SingleSelectorBase9=function(){"use strict";if(this.$SingleSelectorBasei){this.$SingleSelectorBaseh(this.$SingleSelectorBasei,this.$SingleSelectorBasej);this.$SingleSelectorBasei=null;}};fa.prototype.$SingleSelectorBaseh=function(ga,ha){"use strict";this.$SingleSelectorBaseg=ha;this.$SingleSelectorBase1.setValue(ga);this.$SingleSelectorBaseg=null;};fa.prototype.getValue=function(){"use strict";return this.getSelectedItem().getValue();};fa.prototype.getLayer=function(){"use strict";return this.$SingleSelectorBase3;};fa.prototype.getButton=function(){"use strict";return this.$SingleSelectorBase0;};fa.prototype.setMenu=function(ga){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBasek(ga);}else this.$SingleSelectorBasel=ga;};fa.prototype.$SingleSelectorBase8=function(){"use strict";if(this.$SingleSelectorBasel){this.$SingleSelectorBasek(this.$SingleSelectorBasel);this.$SingleSelectorBasel=null;}};fa.prototype.$SingleSelectorBasek=function(ga){"use strict";if(ga!==this.$SingleSelectorBase1){this.$SingleSelectorBase1=ga;if(this.$SingleSelectorBasem)this.$SingleSelectorBasem.unsubscribe();this.$SingleSelectorBasem=this.$SingleSelectorBase1.subscribe('change',this.$SingleSelectorBased.bind(this));l.setContent(this.$SingleSelectorBase2,ga.getRoot());this.$SingleSelectorBase7.setMenu(ga);this.$SingleSelectorBasef=null;}};fa.prototype.getMenu=function(){"use strict";return this.$SingleSelectorBasel||this.$SingleSelectorBase1;};fa.prototype.enable=function(){"use strict";j.setEnabled(this.$SingleSelectorBase0,true);this.$SingleSelectorBase4.enable();};fa.prototype.disable=function(){"use strict";j.setEnabled(this.$SingleSelectorBase0,false);this.$SingleSelectorBase4.disable();};fa.prototype.$SingleSelectorBasea=function(){"use strict";return (s.isFixed(this.$SingleSelectorBase0)&&!s.isFixed(this.$SingleSelectorBase3.getRoot().parentNode));};fa.prototype.align=function(){"use strict";if(!this.$SingleSelectorBasef)this.$SingleSelectorBasef=this.getAlignment();this.$SingleSelectorBasef.align();var ga=v(this.$SingleSelectorBase0,this.$SingleSelectorBase3.getInsertParent());s.set(this.$SingleSelectorBase3.getRoot(),'z-index',ga>200?ga:'');};fa.prototype.getAlignment=function(){"use strict";return new h(new aa(this.$SingleSelectorBase3.getRoot(),aa.TOP,aa.LEFT),new aa(this.$SingleSelectorBaseb(),aa.LEFT,aa.MIDDLE),new aa(this.$SingleSelectorBasen(),aa.LEFT,aa.MIDDLE));};fa.prototype.$SingleSelectorBasen=function(){"use strict";return m.find(this.$SingleSelectorBase0,"._55pe");};fa.prototype.getSelectedItem=function(){"use strict";var ga=null;this.getMenu().forEachItem(function(ha){if(r.isSelected(ha)){w(ga===null);ga=ha;}});w(ga!==null);return ga;};fa.prototype.$SingleSelectorBaseb=function(){"use strict";return m.find(this.getSelectedItem().getRoot(),"._54nh");};fa.prototype.destroy=function(){"use strict";this.$SingleSelectorBase1&&this.$SingleSelectorBase1.destroy();this.$SingleSelectorBase4.destroy();this.$SingleSelectorBase3.destroy();};e.exports=fa;},null);
__d("SingleSelector",["DOM","DOMQuery","SingleSelectorBase","csx"],function(a,b,c,d,e,f,g,h,i,j){for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(n,o,p,q,r){"use strict";this.$SingleSelector0=p;this.subscribe('change',this.$SingleSelector1.bind(this));i.call(this,n,o,q,r);}m.prototype.$SingleSelector1=function(n,o){"use strict";this.$SingleSelector3(o.label);this.$SingleSelector0.value=o.value;};m.prototype.$SingleSelector3=function(n){"use strict";g.setContent(this.$SingleSelector4(),n);};m.prototype.$SingleSelector4=function(){"use strict";return h.find(this.getButton(),"._55pe");};e.exports=m;},null);