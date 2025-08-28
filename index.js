document.getElementById("heart-icon").addEventListener("click",function(e){
    e.preventDefault
    // console.log("heart-icon clicked")
    // const heartCount = perseInt(document.getElementById("heart-count").value)
    const heartIcon = document.getElementById("heart-icon")
    const heartCount = document.getElementById("heart-count").innerText
    
    console.log(heartIcon, heartCount)

}) 