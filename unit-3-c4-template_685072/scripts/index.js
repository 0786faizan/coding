// Ude Import export (MANDATORY)
// import { navbar } from "../components/navbar.js";
// let n = document.getElementById("navbar");
// n.innerHTML = navbar()
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

let searchNews = async () =>{
    let search = document.getElementById("search_input").value;
    try{
        let res = fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${"India"}`);
        
        let data = await res.json();
        console.log(data)       
    }    
    catch(err){
        console.log(err);
    }
}