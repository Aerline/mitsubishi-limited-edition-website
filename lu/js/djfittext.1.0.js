
/* djFitText.1.0.js Start */
(function($){$.fn.djFitText=function(options){var settings=$.extend({MaxWidth:1280,MinWidth:768,Items:""},options);var item=this;$(window).resize(function(){if($(window).width()>=settings.MinWidth&&$(window).width()<=settings.MaxWidth){for(var count=0;count<settings.Items.length;count++){var uiItem=$(item).find(settings.Items[count][0]);var prop=settings.Items[count][1];var propMaxVal=parseInt(settings.Items[count][2]);var propMinVal=parseInt(settings.Items[count][3]);var propVal=propMaxVal-((propMaxVal-propMinVal)*(settings.MaxWidth-$(window).width()))/(settings.MaxWidth-settings.MinWidth);if(prop=="line-height"){propVal+="px"}uiItem.css(prop,propVal)}}else{for(var count=0;count<settings.Items.length;count++){var uiItem=$(item).find(settings.Items[count][0]);var prop=settings.Items[count][1];uiItem.css(prop,"")}}});$(window).load(function(){if($(window).width()>=settings.MinWidth&&$(window).width()<=settings.MaxWidth){for(var count=0;count<settings.Items.length;count++){var uiItem=$(item).find(settings.Items[count][0]);var prop=settings.Items[count][1];var propMaxVal=parseInt(settings.Items[count][2]);var propMinVal=parseInt(settings.Items[count][3]);var propVal=propMaxVal-((propMaxVal-propMinVal)*(settings.MaxWidth-$(window).width()))/(settings.MaxWidth-settings.MinWidth);if(prop=="line-height"){propVal+="px"}uiItem.css(prop,propVal)}}})}}(jQuery));