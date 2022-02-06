

let kepek=["sovereign.png", "magyarszentek.png",
		   "magyarszabadsag.png","aranymeteorit.jpg",
		   "aranyerme.jpg","aranydukat.png"];

let aktualis = 0;

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app-container")
);

function App(){
    var [kep, setKep] = React.useState(aktualis);
    console.log(aktualis);
    return React.createElement(
        "div",
        {
            style:{
                textAlign: "center"
            },
            className: "border"
        },
        React.createElement(
            "button",
            {
                className: "btn btn-primary m-4",
                style:{
                    width: "95px"
                },
                onClick: ()=>{
                    if(aktualis > 0){
                        setKep(aktualis--);
                        /*document.getElementById("kep").innerHTML = "";
                        var kep = document.createElement("img");
                        kep.src = "image/" + kepek[aktualis];
                        document.getElementById("kep").appendChild(kep);*/
                    }
                    console.log(aktualis);
                }
            },
            "Előző"
        ),
        React.createElement(
            "img",
            {
                src: kepek[kep],
                style:{
                    width: "400px",
                    height: "200px",
                    //display: "flex",
                    //flexDirection: "column"
                    //marginLeft: "auto",
                    //marginRight: "auto",
                },
            }
        ),
        React.createElement(
            "button",
            {
                className: "btn btn-primary m-4",
                style:{
                    //float: "right",
                    width: "95px"
                },
                onClick: ()=>{
                    if(aktualis < 5){
                        setKep(aktualis++);
                        /*document.getElementById("kep").innerHTML = "";
                        var kep = document.createElement("img");
                        kep.src = "image/" + kepek[aktualis];
                        document.getElementById("kep").appendChild(kep);*/
                    }
                    console.log(aktualis);
                }
            },
            "Következő"
        ),
    )
}
