/* Here you will set the global configuration values. You can define multiple properties for each of the environments.The different environments would be:
- development: Development Server
- local: Local Server
- production: Production Server
You will define environment values for anything that depends on the environment (Example: API endpoints, API Keys, etc)
*/
export default  {
    environment:"development",
    development:{
        example:"Example config value in the development environment"
    },
    production:{
        example:"Example config value in the production environment"
    },
    local:{
        example:"Example config value in the local environment"
    }, 
    get:function(setting) {
        return this[this.environment][setting];
    }
}