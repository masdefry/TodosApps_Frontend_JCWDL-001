function InviniteNavbar(){
    if(document.body.scrollTop > 25 || document.documentElement.scrollTop > 25){
        return document.getElementById("navbar").className = "w-100 position-fixed py-3 border-bottom";
    }else{
        return document.getElementById("navbar").className = "w-100 position-fixed py-3 bg bg-dark";
    }
}

export default InviniteNavbar