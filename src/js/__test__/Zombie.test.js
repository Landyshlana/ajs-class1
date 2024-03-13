import Character from "../Zombie"

test ('обьект', ()=>{
    expect( new Character('Timmi','Zombie')).toEqual({
        name:'Timmi',
        type:'Zombie',
        health:100,
        level:1,
        attack:40,
        defence:10,
    })
})
