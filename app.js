const arrays= [
    42 ,true , 'hello world',
    {
        name : 'jhon',
        age : 25 ,
        student : false,
    },
    false ,
    3.14,
    'javascirpt is fun'
];
  let stringArray = arrays.map((element) => String(element));
  console.log(stringArray);

  //out put//
  // "42"
   //"true" 
   //"hello world"
   //"[object Object]"
   //"false" 
   //"3.14"
   //"javascirpt is fun"

   const fil= [
    42 ,true , 'hello world',
    {
        name : 'jhon',
        age : 25 ,
        student : false,
    },
    false ,
    3.14,
    'javascirpt is fun'
];
 let numberArray =fil.filter((element) => typeof element === 'number');
  console.log(numberArray);
     // out put //
    // 42  3.14 //

    const eaa= [
        42 ,true , 'hello world',
        {
            name : 'jhon',
            age : 25 ,
            student : false,
        },
        false ,
        3.14,
        'javascirpt is fun'
    ];
      eaa.forEach((element) =>{
         console.log(typeof element);
      });
      // OUT PUT //
      //number
     //boolean
       //string
     //object
     //boolean
     //number
     //string

     let a =[2 ,6,4,1.3];
     let sum =  a.reduce((pre , current) =>{
        return pre + current;
     });
         console.log(sum);

         //out put//
         // 13.3 //


         const fin= [
            42 ,true , 'hello world',
            {
                name : 'jhon',
                age : 25 ,
                student : false,
            },
            false ,
            3.14,
            'javascirpt is fun'
        ];
         let bul = fin.find((element)=>
               typeof element === 'boolean'
         );
         console.log(bul);
         // true //


         const ind= [
            42 ,true , 'hello world',
            {
                name : 'jhon',
                age : 25 ,
                student : false,
            },
            false ,
            3.14,
            'javascirpt is fun'
        ];
        let inde = ind.findIndex((element)=> typeof element === 'object');
         console.log(inde);

         // 3 ans  //


         const num= [
            42 ,true , 'hello world',
            {
                name : 'jhon',
                age : 25 ,
                student : false,
            },
            false ,
            3.14,
            'javascirpt is fun'
        ];
        let som = num.some((element)=>typeof element === 'number');
        console.log(som);
        /// true ///  ans

        const eve= [
            42 ,true , 'hello world',
            {
                name : 'jhon',
                age : 25 ,
                student : false,
            },
            false ,
            3.14,
            'javascirpt is fun'
        ];
        let e = eve.every((element)=> typeof element ==='string');
        console.log(e);

        // false //