export function getWineCategories(wine_list){
  const styles = wine_list.map(wine => wine.wine_category);
  return[...new Set(styles)];
}