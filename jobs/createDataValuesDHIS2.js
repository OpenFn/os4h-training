//We use fn() when we want to manipulate/transform the data using JavaScript
fn(state => {
  const data = state.results; 
  
  //count rows fetched in job 1 to calculate indicator result
  const numberOfRows = data ? data.length : '0'; 
  
  //Log results from job 1
  console.log('# of rows fetched from DB:: ', numberOfRows); 

  return {...state, numberOfRows};
});


//Using the DB data, we want to submit new data values to report on the key dataElement
create('dataValueSets', {
  dataSet: 'BfMAe6Itzgt', //Label: Child Health
  completeDate: '2014-02-03',
  period: '201401', //reporting period: January 2014
  orgUnit: 'O6uvpzGd5pu', //Label: Bo
  dataValues: [
    {
      dataElement: 's46m5MS0hxu', //Label: BCG doses given
      value: state => state.numberOfRows, //return calculated indicator result
    }
  ],
});
