/* standard_default.js */
$(window).on('load',function() {
	$('#adc_{%= CurrentADC.InstanceId %}').adcLightGallery({
        instanceId : '{%= CurrentADC.InstanceId %}',
		maxWidth : '{%= CurrentADC.PropValue("maxWidth") %}',
		controlWidth : '{%= CurrentADC.PropValue("controlWidth") %}',
		controlAlign : '{%= CurrentADC.PropValue("controlAlign") %}',
        showCounter : {%= (CurrentADC.PropValue("showCounter") = "1") %},
        showCaptions : {%= (CurrentADC.PropValue("showCaptions") = "1") %},
        showControls : {%= (CurrentADC.PropValue("showControls") = "1") %},
        showThumbs : {%= (CurrentADC.PropValue("showThumbs") = "1") %},
        transitionEffect : '{%= CurrentADC.PropValue("transitionEffect") %}'
	});
});