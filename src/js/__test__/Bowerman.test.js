import Character from "../Bowerman"

test ('обьект', ()=>{
    expect( new Character('Timmi','Bowerman')).toEqual({
        name:'Timmi',
        type:'Bowerman',
        health:100,
        level:1,
        attack:25,
        defence:25,
    })
})
