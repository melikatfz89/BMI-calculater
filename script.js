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