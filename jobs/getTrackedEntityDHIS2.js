//Using the DHIS2 adaptor instead of HTTP to skip some steps
get('trackedEntityInstances/PQfMcpmXeFE', 
state => {
  //Here we add a callback to log the response from the API
   console.log('Response from DHIS2:', JSON.stringify(state.data, null, 2)); 
   return state; 
});
