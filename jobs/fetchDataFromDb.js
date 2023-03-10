sql(
  state =>
    `  SELECT * FROM patient`,
);

fn(state => {
  const results = state.response.body.rows;
  return { ...state, results };
  
});
