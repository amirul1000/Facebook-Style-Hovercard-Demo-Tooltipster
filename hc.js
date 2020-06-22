$(function() {
    $('.my-tooltip').tooltipster({
        interactive: true,
        content: 'Loading...',
        contentCloning: false,
        contentAsHTML: true,
        animation: 'fade',
        functionBefore: function(origin, continueTooltip) {
            // we'll make this function asynchronous and allow the tooltip to go ahead and show the loading notification while fetching our data.
             continueTooltip();
			 
             jQuery.ajax({
                    type: "GET",
                    url: $(this).attr("data-url"),
                    data: {
                          
                          },
                    success: function(results) {	
					      
                         origin.tooltipster('content', results);
						 
						  
                        },
				    error: function (jqXHR, exception) {
						alert(jqXHR.status);
					}						
						
            });

        
			
            
        }
    });
});