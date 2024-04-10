function CheckHT(){
    let regex = /^[A-Z][a-z]*(\s+[A-Z][a-z]*)*$/;
    let HT = document.getElementById("txtHT").value;
    if (HT.trim().length == 0) {
        document.getElementById("tbHT").innerHTML ="Không để trống";
        return false;
    } else if (!(regex.test(HT))) {
        document.getElementById("tbHT").innerHTML ="Nhập sai định dạnh";
        return false;
    } else {
        document.getElementById("tbHT").innerHTML ="";
        return true;
    }
}
function CheckDN(){
    let DN = document.getElementById("txtDN").value;
    if (DN.trim().length == 0) {
        document.getElementById("tbDN").innerHTML = "Không để trống";
        return false;
    } else  {
        document.getElementById("tbDN").innerHTML = "";
        return true;
    }
}
function CheckMK(){
    let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    let MK = document.getElementById("txtMK").value;
    if (MK.trim().length == 0) {
        document.getElementById("tbMK").innerHTML = "Không để trống";
        return false;
    } else if (!(regex.test(MK))) {
        document.getElementById("tbMK").innerHTML ="Nhập sai định dạnh";
        return false;
    } else {
        document.getElementById("tbMK").innerHTML = "";
        return true;
    }
}
function CheckNLMK(){
    let NLMK = document.getElementById("txtNLMK").value;
    let MK = document.getElementById("txtMK").value;
    if (NLMK.trim().length == 0) {
        document.getElementById("tbNLMK").innerHTML = "Không để trống";
        return false;
    } else if (NLMK != MK) {
        document.getElementById("tbNLMK").innerHTML = "Khác mật Khẩu";
        return false;
    } else {
        return true;
    }
   
}
function CheckE(){
    let regex = /^[a-zA-Z0-9._-]+@(gmail|email|outlook)\.com$/;
    let E = document.getElementById("txtE").value;
    if (E.trim().length == 0) {
        document.getElementById("tbE").innerHTML = "Không để trống";
        return false;
    } else if (!(regex.test(E))) {
        document.getElementById("tbE").innerHTML ="Nhập sai định dạnh";
        return false;
    } else {
        document.getElementById("tbE").innerHTML = "";
        return true;
    }
}
function CheckSDT(){
    let SDT = document.getElementById("txtSDT").value;
    let regex = /^[0-9]$/;
    if (SDT.trim().length == 0) {
        document.getElementById("tbSDT").innerHTML = "Không để trống";
        return false;
    } else if (!(regex.test(SDT))) {
        document.getElementById("tbSDT").innerHTML ="Nhập sai định dạnh";
        return false;
    } else {
        document.getElementById("tbSDT").innerHTML = "";
        return true;
    }
}
