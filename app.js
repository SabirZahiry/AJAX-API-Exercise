console.log("Let's get this party started!");
// async function searchAnythigs(){
//     const giphy = await axios.get('https://api.giphy.com/v1/gifs/search')
//     console.log(giphy.data);  
// }
// searchAnythigs()
const $gifArea = $("#gif-area");
const $searchInput = $("#search");
//using AJAX to add the giphy
function addGif(res){
    let numRes = res.data.length;// finding the lenght of the data
    if(numRes){
        let randomNum = Math.floor(Math.random()*numRes);// chacking the random number 
        let newColum = $("<div>", {class: "col-md-4 col-12 mb-4"});
        let newGif = $("<img>", 
        {src: res.data[randomNum].images.original.url});// get access to all data
        newColum.append(newGif);
        $gifArea.append(newColum);
    }
}
 
// now clearing search box and make ajax call
$("form").on("submit", async function(event){
    event.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val("");
    
    // link the azios and api key 
    const Respons = await axios.get("https://api.giphy.com/v1/gifs/search", 
    {params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym" 
        }
    });
    addGif(Respons.data);
});

// removing the gif
$("#remove").on("click", function(){
    $gifArea.empty()// make gifarea empty 
})



