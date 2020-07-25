/*
 *  Place copyright or other info here...
 */

(function(global){
    
    // Define core
    var atheos = global.atheos;

    // Initiates plugin
	amplify.subscribe('system.loadExtra', () => atheos.MY_PLUGIN.init());


    atheos.MY_PLUGIN = {
        
        // Allows relative `this.path` linkage
        path: 'curpath',

        init: function() {

            // Start your plugin here...

        },

        /**
         * 
         * This is where the core functionality goes, any call, references,
         * script-loads, etc...
         * 
         */
         
         SOME_METHOD: function() {
            alert('Hello World');  
         }

    };

})(this);
