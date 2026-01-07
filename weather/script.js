const fetchData = async(cityname)=>{
    const APIKey = '0b3b59b8a8c6e4f73fd5fe01cc85f92e'
    const error = document.getElementById("error");
    const output =  document.getElementById("output")

const reponse =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}`);
if(!reponse.ok){
        error.textContent = 'faild to fetch'
        return
    }
    const data = await reponse.json()
    console.log(data)
    const temperature = Math.floor

    output.innerHTML = `
    <h1>${data.name}</h1>
    <h1>${data.main.temp}`
}
const callerFun =()=>{
    const searchInput=document.getElementById("searchInput").value.trim();
    const error = document.getElementById("error")
    error.style.color='red'
    if(!searchInput){
        error.textContent="enter city name "
        return
    }
    console.log(searchInput)
    fetchData(searchInput)
}