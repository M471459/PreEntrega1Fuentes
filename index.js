console.log("Este es una calculadora de NPS (Net Promoter Score)")
let n=parseInt(prompt("¿Cuántos usuarios fueron encuestados?"))
const elem=new Array(n)
let promotores=0
let neutros=0
let detractores=0
for(let i=0;i<n;i++)
    {   
        elem[i]=parseInt(prompt("Ingrese la evaluación número "+(i+1)+" (notas de 0 a 10)"));
        if(elem[i]>8)promotores++
        else if (elem[i]>6) neutros++
        else detractores++ 
    }

function resultado(){
    console.log("promotores: "+promotores)
    console.log("detractores: "+promotores)
    let nps=promotores/n-detractores/n
    console.log("NPS: "+(nps*100).toFixed(2)+"%")
}

resultado()




