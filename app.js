function symbol(numbers) {
    document.getElementById('calc').value+=numbers
}
function operator(signs){
    document.getElementById('calc').value+=signs
}
function result(){
    x = document.getElementById('calc').value
    y= eval(x)
    document.getElementById('calc').value=y
}
function clearinput(){
    document.getElementById('calc').value=" "
}
function changesign(){
    exe = parseInt(document.getElementById('calc').value)
    document.getElementById('calc').value = -exe
}
function oneclear() {
    var oncechange= document.getElementById('calc').value
   // console.log(oncechange)
    var length = oncechange.length
    //console.log(length)
    var lts = oncechange.length-1
    document.getElementById('calc').value = oncechange.substring(0,lts)
}
