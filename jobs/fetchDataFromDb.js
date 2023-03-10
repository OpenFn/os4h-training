sql(
  state =>
    `  SELECT * FROM patient`,
);

fn(state => {
  console.log('Data fetched from source database ✅ ')
  const results = state.response.body.rows;
  return { ...state, results };
  
});
