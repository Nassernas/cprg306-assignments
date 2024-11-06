export default function Item({itemObj, onSelect}){
    
    let {name, quantity, category} = itemObj;

    return (
        <div className="bg-cyan-600 border border-white p-5 my-5 mx-10 max-w-lg font-bold cursor-pointer hover:bg-cyan-700"
        onClick={() => onSelect(itemObj)}>
            <ul>
                <li className="text-xl">{name}</li>
                <li>{quantity}</li>
                <li>{category}</li>
            </ul>
        </div>
    );

}
