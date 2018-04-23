
function first() {
    return new Promise(rs=>{
        setTimeout(()=>{
            console.log('first');
            rs();
        },1000);
    })
  }
  function second() {
    console.log('second');
  }
  const asyncSample = async() =>{
    await first();
    await second();
    console.log('finish');
  }

  asyncSample();