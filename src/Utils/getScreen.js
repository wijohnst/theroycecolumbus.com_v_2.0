export function getScreen(targetScreen){

  const screens = {
    desktop : `1280px`,
    tablet : `768px`,
    mobile : `400px`
  }

  return screens[targetScreen];
}