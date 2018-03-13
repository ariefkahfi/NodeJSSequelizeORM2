const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const sequelize = new Sequelize("s_orm1","arief","123",{
    dialect:"mysql",
    operatorsAliases:false
});

// Defining getter and methods as part of property
const PersonModel = sequelize.define("person",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        field:"person_id"
    },
    name:{
        type:Sequelize.STRING
        // set(val){
        //     const tName = val;
        //     this.setDataValue("name",`YOUR_NAME${tName}`);
        // }
    }
},{
    timestamps:false,
    tableName:"person"
});

// update & delete
// PersonModel.update({
//     name:"Hello update"
// },{
//     where:{
//         [Op.or]:[
//             {id : {[Op.gte] : 6}},
//             {name : {[Op.like]: "%YOUR%"}}
//         ]
//     }
// }).then(val=>{
//     console.log(val);
// }).catch(err=>{
//     console.log(err);
// })
// PersonModel.destroy({
//     where:{
//         id:{
//             [Op.gte] : 6
//         },
//         name:{
//             [Op.like] : "%Hello%"
//         }
//     }
// }).then(val=>{
//     console.log(val);
// }).catch(err=>{
//     console.log(err);
// })


// > (greater than) operator 
// PersonModel.findAll({
//     where:{
//         id:{
//             [Op.gt]: 2
//         }
//     }
// }).then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })

// LIKE operators
// PersonModel.findAll({
//     where:{
//         name:{
//             [Op.like]:"%YOUR%"
//         }
//     }
// }).then(val=>{
//     console.log(val);
// }).catch(err=>{
//     console.log(err);
// })

// Or operator
// PersonModel.findAll({
//     where:{
//         id:{
//             [Op.or]:[2,90]
//         }
//     }
// }).then(val=>{
//     console.log(val);
// }).catch(err=>{
//     console.log(err);
// });


// select * from person where person_id > 5 AND name like '%YOUR%';
// PersonModel.findAll({
//     where:{
//         id:{
//             [Op.gt] : 5
//         },
//         name:{
//             [Op.like]: "%YOUR%"
//         }
//     }
// }).then(val=>{
//     console.log(val);
// }).catch(err=>{
//     console.log(err);
// });

//  select * from person where person_id > 5 or name like '%YOUR%';
// PersonModel.findAll({
//     where:{
//         [Op.or]:[
//             {id : { [Op.gt] :5 } },
//             {name : {[Op.like]: "%YOUR%" }}
//         ]
//     }
// }).then(val=>{
//     console.log(val);
// }).catch(err=>{
//     console.log(err);
// });



