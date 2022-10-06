import "./ActorIndexPage.css";
import NavBar from "../../components/NavBar/NavBar";


function ActorIndexPage({username, movies}){
      console.log("----------");
    
    const actorList = new Set();
    console.log(actorList)
    console.log(typeof actorList)

    console.log("a")
    actorList.add("a")
    console.log(actorList)

    console.log("b")
    actorList.add("b")
    console.log(actorList)

    console.log("a")
    actorList.add("a")
    console.log(actorList)

    console.log("----------")
    let value_string = "";
    actorList.forEach(function(value){
        value_string = value 
        console.log(value_string);
    })
  




    
    return (
        <>
        <NavBar username={username} />
        <h1> test </h1>
        
        </>
    );
  }
  
export default ActorIndexPage;