import React from "react";


interface childInterface {
    color:string;
    newColor:string;
    onClick: () => void;
    children:JSX.Element
}

export const Child: React.FC<childInterface> = ({color,newColor,onClick, children}) => {
    return (
        <div>
            <h1>{color},{newColor}</h1>
            <p>{children}</p>
            <button onClick={onClick}>Click ME</button>
        </div>

    );
}

// export const Child = ({color,newColor,onClick}:childInterface) => {
//     return (
//         <div>
//             <h1>{color}{newColor}</h1>
//             <button onClick={onClick}>Click ME</button>
//         </div>
//
//     );
//
// }