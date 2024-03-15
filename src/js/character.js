export default class Character {
	constructor(name, type) {
		if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
			throw new Error('ошибка');
		} else {
			this.name = name;
		}
		const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
		if (!types.includes(type)) {
			throw new Error('ошибка')
		} else {
			this.type = type;
		}
		this.health = 100;
		this.level = 1;
		this.attack = undefined;
		this.defence = undefined;
	}

	levelUp() {
		if (this.level === 0) {
			throw new Error('ошибка')
		} else {
			this.level += 1,
				this.attack += 0.2 * this.attack,
				this.defence += 0.2 * this.defence,
				this.health = 100
		}
	}
	damage(points) {
		this.health -= points * (1 - this.defence / 100);
		if ( this.health <= 0) {this.health = 0};
	}
}