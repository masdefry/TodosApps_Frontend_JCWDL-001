function InviniteNavbar(){
    if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
        return document.getElementById("navbar").className = "w-100 position-fixed py-3 bg bg-light";
    }else{
        return document.getElementById("navbar").className = "w-100 position-fixed py-3";
    }
}

export default InviniteNavbar