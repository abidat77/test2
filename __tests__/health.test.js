import { getHealthStatus, sortHeroesByHealth } from '../src/health.js';

describe('getHealthStatus', () => {
  test('returns "healthy" when health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  })
});

describe('sortHeroesByHealth', () => {
  test('возвращает новый массив, отсортированный по health по убыванию', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);

    expect(heroes).toEqual([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);

    expect(sorted).not.toBe(heroes);
  });

  test('корректно работает с пустым массивом', () => {
    expect(sortHeroesByHealth([])).toEqual([]);
  });

  test('корректно сортирует, если несколько героев с одинаковым health', () => {
    const heroes = [
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
      { name: 'мечник', health: 10 },
    ];

    const sorted = sortHeroesByHealth(heroes);

    expect(sorted).toEqual([
      { name: 'маг', health: 50 },
      { name: 'лучник', health: 50 },
      { name: 'мечник', health: 10 },
    ]);
  });
});
