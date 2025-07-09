export function getHealthStatus(character) {
  const { health } = character;

  if (health > 50) {
    return 'healthy';
  } else if (health >= 15) {
    return 'wounded';
  } else {
    return 'critical';
  }
}

export function sortHeroesByHealth(heroes) {
  const heroesCopy = [...heroes];
  heroesCopy.sort((a, b) => b.health - a.health);
  return heroesCopy;
}