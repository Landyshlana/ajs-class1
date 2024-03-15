import Character from "../character"

test('выброс ошибки при неправильной длине name', () => {
	expect(()=>new Character('p', 'Magician')).toThrowError(new Error('ошибка'));
});

test('выброс ошибки при неправильной длине name', () => {
	expect(()=>new Character('testtesttest', 'Magician')).toThrowError(new Error('ошибка'));
});
test('выброс ошибки при неправильном типе', () => {
	expect(()=>new Character('test', 'Mag')).toThrowError(new Error('ошибка'));
});
test('обьект', () => {
	expect(new Character('Timmi', 'Magician')).toEqual({
		name: 'Timmi',
		type: 'Magician',
		health: 100,
		level: 1,
		attack: undefined,
		defence: undefined,
	});
});
test('error levelUp', () => {
	const character = new Character('Timmi', 'Magician');
	character.level = 0;
	expect(()=>character.levelUp()).toThrowError(new Error('ошибка'));
})

test('levelUp', () => {
	const character = new Character('Timmi', 'Magician');
	character.level = 1;
	character.attack = 10;
	character.defence = 10;
	character.levelUp();
	expect(character).toEqual({
		name: 'Timmi',
		type: 'Magician',
		health: 100,
		level: 2,
		attack: 12,
		defence: 12,
	})
})
test('damage', () => {
	const character = new Character('Timmi', 'Magician');
	character.defence = 10;
	character.damage(50);
	expect(character.health).toBe(55);
  });
  
test('damage', () => {
	const character = new Character('Timmi', 'Magician');
	character.defence = 10;
	character.damage(200);
	expect(character.health).toBe(0);
});
