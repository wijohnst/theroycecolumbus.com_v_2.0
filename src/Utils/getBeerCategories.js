export function getBeerCategories(beer_list){
  const styles = beer_list.map(beer => beer.beer_style);
  return[...new Set(styles)];
}