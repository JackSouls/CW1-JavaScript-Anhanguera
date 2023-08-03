var temp_abriu = 9
const temp_fechou = 17
const minutos = 15;
var total_entrevista = 0;
for (i = temp_abriu; i < temp_fechou; i=i+1){
    if((i == 12) || (i == 13)){
        continue;
      }
  for(j = 0; j < 60; j = j+minutos){
    total_entrevista++;
    if(j==0){
        console.log("Entrevista #"+total_entrevista+"=>"+i+":"+j+"0")
    } else {
    console.log("Entrevista #"+total_entrevista+"=>"+ i + ":" + j)
    }
  }
}

