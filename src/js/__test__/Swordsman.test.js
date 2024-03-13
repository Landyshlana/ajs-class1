import Character from "../Swordsman"

test ('обьект', ()=>{
    expect( new Character('Timmi','Swordsman')).toEqual({
        name:'Timmi',
        type:'Swordsman',
        health:100,
        level:1,
        attack:40,
        defence:10,
    })
})
