const solder = {
    health: 400,
    armor:120,
    sayHello: function(){
        console.log(`Hello`)
    }
};
const jonh = Object.create(solder);
/* jonh = {
    health: 100
}; */

//jonh.__proto__ = solder;
//Object.setPrototypeOf(jonh,solder);

jonh.sayHello();