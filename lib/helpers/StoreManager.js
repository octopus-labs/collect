const config = {
    API_KEY:null,
    IS_NODE: typeof process !== 'undefined' && !!process.versions && !!process.versions.node && !process.version.electron,
}

module.exports = {
    set: function(key, value){
        config[key] = value;
    },
    get: function get(key) {
        if (config.hasOwnProperty(key)) {
          return config[key];
        }
        throw new Error('Configuration key not found: ' + key);
    }
}