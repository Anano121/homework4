function f1(m,n){
    if (m>n)
      return m;
     else if (m<n)
      return n
    else 
      return 0
  
  }
  console.log(f1(5,6))
  
  function f2(a,b){
      return a+b
  }
  console.log(f2(3,4))
  
  
  function f3(){
   console.log("anano chezhia")
  }
  f3()
  
  function f4(firstname,lastname){
      let fullname=firstname+lastname
      return (fullname)
  }
  console.log(f4("nino"," chezhia"))
  
  
  
  
  function f6(n){
     let x=1
     let i=1
     
     for (i;i<n;i++)
      x=x*i
    return x
  }
  console.log(f6(6)) 
  
  let student={
      firstname:"anano",
      lastname:"chezhia",
      age:20,
      scores:[4,7,5,6,2],
      fullname(){
          console.log(student.firstname, student.lastname)
  
      }
  }
  student.fullname()


  function scores(student){
    let sum=0
    let i=0
    for(i;i<student.scores.length;i++){
      sum=sum+student.scores[i]
     
    }
    return sum

  }console.log(scores(student))
  

  console.log(student.firstname,student.lastname)
  