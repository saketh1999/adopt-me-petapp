import { Component } from "react"; 

class Carousel extends Component{
    state ={
        active:0
    }
    static defaultPops={
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }
    handleIndexClick=(e)=>{
        this.setState({
            active: +e.target.dataset.index, // index is a string, we are using JS to modify it back to number
            //this is explicit type convertion
        })
    };
    render(){
      //  throw new Error("lol error")
        const {active} = this.state;
        const {images} = this.props;
        
    
        return(
        <div className="carousel">
            <img src={images[active]} alt="animal hero"/>
            <div className="carousel-smaller">
                {images.map((photo,index)=>(
                    <img 
                    data-index = {index}
                    onClick={this.handleIndexClick}
                    key={photo}
                        src={photo}
                        className={index===active? "active":""}
                        alt="animal thumbnail"
                    />
                ))}
            </div>
        </div>
        )
    }
}

export default Carousel;