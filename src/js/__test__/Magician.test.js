import  Character from "../Magician"

test ('обьект', ()=>{
    expect( new Character('Timmi','Magician')).toEqual({
        name:'Timmi',
        type:'Magician',
        health:100,
        level:1,
        attack:10,
        defence:40,
    })
})
