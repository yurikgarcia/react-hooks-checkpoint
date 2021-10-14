export default function Products({currentProduct, selector, description, category, price}){
    let output = <div></div>;
    if(currentProduct === selector){
        output = <div>
                <br/>
                <h3>{description}</h3>
                <br/>
                <h4> {category} </h4>
                <br/>
                <h5>{price}</h5>
                <br/>
                </div>;
    }
    return output;
}