(function ($) {

	/**
	* @param {Object} options Statements list parameters
	* @param {Array}  options.iterations Array which contains the definition of iterations
	* @param {String} options.iterations[].id Id or name of the input which contains the value of the current iteration
	* @param {String} options.iterations[].caption Caption of the current iteration
	* @param {Boolean} [options.isMultiple] Indicates if the question is multiple
	* @return {jQuery} Returns the current instance of the root container for the call chains
	*/
    
	$.fn.adcLightGallery = function adcLightGallery(options) {      
         
        var $container = $(this),
        	showCounter = Boolean(options.showCounter),
            showCaptions = Boolean(options.showCaptions),
            showThumbs = Boolean(options.showThumbs),
            showControls = Boolean(options.showControls),
        	transitionEffect = options.transitionEffect;
        
        $container.find('a').each( function(){
        	//console.log( $(this).next('img').width() );
        	$(this).next('.caption').width( $(this).find('img').width() );
		});
		
		//lightGallery(document.getElementById('lightgallery'), {
   		lightGallery(document.querySelector('#adc_'+ options.instanceId+' #lightgallery'), {
			download: false,
			counter: showCounter,
			getCaptionFromTitleOrAlt: showCaptions,
			thumbnail: showThumbs,
			animateThumb: true,
			controls: showControls,
			subHtmlSelectorRelative: true,
			selector : 'a',
            hideBarsDelay : 1000,
            mode : transitionEffect,
			loadYoutubeThumbnail: true,
    		youtubeThumbSize: 'default',
    		loadVimeoThumbnail: true,
    		vimeoThumbSize: 'thumbnail_medium'
		}); 
        
        $container.parents('.controlContainer').css({'opacity':1,'visibility':'visible'});
        
        return this;
    };
} (jQuery));