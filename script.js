const rangeOneElem=document.getElementById('rangeOne')
const rangeTwoElem=document.getElementById('rangeTwo')

const spanRange1Elem=document.querySelector('.spanRange1')
const spanRange2Elem=document.querySelector('.spanRange2')

const spanbmiElem=document.querySelector('.bmiSpan')



rangeOneElem.addEventListener('input' , showrangeKG)
rangeTwoElem.addEventListener('input' , showrangeKG)

function showrangeKG(){
        const weight=rangeOneElem.value
        spanRange1Elem.innerHTML=weight+'Kg'

        const height=(rangeTwoElem.value)/100
        spanRange2Elem.innerHTML=height+'M'

        const bmitotal=weight/(Math.pow(height,2))
        spanbmiElem.innerHTML='amout of BMI='+bmitotal.toFixed(2)

}
const totalElem=document.querySelector('.total-date')
const hourElem=document.getElementById('hour')
const minuteElem=document.getElementById('minute')
const secondElem=document.getElementById('seconds')


setInterval (function (){
        const myTime= new Date()
        const nowhour=myTime.getHours()
        const nowminute=myTime.getMinutes()
        const nowsecound=myTime.getSeconds()
        
        if (nowhour<10){
                nowhour='0'+nowhour
        }
        if (nowminute<10){
                nowminute='0'+nowminute
        }
        if (nowsecound<10){
                nowsecound='0'+nowsecound
        }

        hourElem.innerHTML=nowhour
        minuteElem.innerHTML=nowminute
        secondElem.innerHTML=nowsecound

},1000)