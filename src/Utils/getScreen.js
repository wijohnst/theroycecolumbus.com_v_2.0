export function getScreen(targetScreen){

  const screens = {
    desktop : `1280 px`,
    tablet : `768 px`,
    mobile : `375 px`
  }

  return screens[targetScreen];
}