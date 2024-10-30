export default function Item({itemObj}){
    
    let {name, quantity, category} = itemObj;

    return (
        <div className="bg-cyan-600 border border-white p-5 my-5 mx-10 max-w-lg font-bold">
            <ul>
                <li className="text-xl">{name}</li>
                <li>{quantity}</li>
                <li>{category}</li>
            </ul>
        </div>
    );

}
