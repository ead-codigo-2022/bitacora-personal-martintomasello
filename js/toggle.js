const menu_toggle = document.querySelector('.boton_on_off')
const navigation = document.querySelector('.lo_afectado')
menu_toggle.onclick = function(){
    navigation.classList.toggle('active')
}