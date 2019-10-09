module.exports = function zeros(expression) {
  
  let composit = expression.split('*');
        let m=0;
        let two=0;
        let five=0;
        
        

        composit.forEach(function(item, i, composit) {
          if (item.indexOf('!!') === -1) {

            let rOne=item.replace(/!/g, '');
            let n=5;
            while (n<=rOne){
              five+=Math.floor(rOne/n);
              n=n*5;
            }

            let k=2;
            while (k<=rOne){
              two+=Math.floor(rOne/k);
              k=k*2;
            }

          } else {
            
            let rTwo=item.replace(/!!/g, '');
            if (rTwo%2 === 0){

              if (rTwo>=10) {
                rTwos=Math.floor(rTwo/10);
                five+=Math.floor(rTwo/10);
              };

              let q = 2;
              while (q<=rTwo) {
                two+=Math.floor(rTwo/q);
                q=q*2;
              }

              let a = 5;
              while (a<=rTwos) {
                five+=Math.floor(rTwos/a);
                a=a*5;
              }
     
            } else {

              let w = 5;
              while (w<=rTwo) {
                five+=1;
                w=w+10;
              }

              let p = 25;
              while (p<=rTwo) {
                five+=1;
                p=p+50;
              }

            }
          }
        })
        m+=Math.min(two, five);
        
        return m;
      }
    
 

    /*
          composit.forEach(function poisk(element){
            let n=0;
            if (element.indexOf !== -1) {
              
                element.replace(/!/g, '');
                i = 5;
                while (element >= i && element%i==0) {
                  
                  n += element/i;
                  i *= 5;
                }
            } else {
              
                i = 10;
                while (element >= i && element%i==0) {
                  
                  n += +1+element/i;
                  i *= 10;
                }
            }
            return n;
          }
        
          )*/
         
        
           
           



  /*
  let composit = expression.split('!*');
  function zeros(n){
    zeros = n => {
    counter = 0;
     for (i = 5; n/i >= 1; i *= 5)
    counter += Math.floor(n/i);
  return counter;

  arr.forEach(function(item, index, array) {
    // ... делать что-то с item
  });
   };
  }
  return composit;*/
