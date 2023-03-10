//Send GET request to DHIS2 API
get('https://play.dhis2.org/2.39.0.1/api/trackedEntityInstances/PQfMcpmXeFE', {
   headers: {'content-type': 'application/json'},
   authentication: {
     username: state.configuration.username, //dynamically fill with username secret from Credential
     password: state.configuration.password //dynamically fill with password secret from Credential
   }
 }, state => { 
   //Here we add a callback to log the response from the API
   console.log('Response from DHIS2:', JSON.stringify(state.data, null, 2)); 
   return state; 
 }); 
