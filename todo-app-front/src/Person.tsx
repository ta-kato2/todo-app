import React, { useState } from 'react';

interface PersonProps {
    name: string
    age: number
    height: number
}

const Person: React.FC<PersonProps> = (props) => {

    const [age, setAge] = useState(10);
    const [height, setHeight] = useState(100);

    const buttonClick = () => {
        setAge(age + 1);
        setHeight(height + 1);
    };

    return (
        <div>
              {props.name}
              {age}歳
              {height}cm
              <button onClick={buttonClick}>ぼたん</button>
        </div>
    );
}

export default Person;



// class Person extends React.Component<PersonProps, PersonState> {
//
//     constructor(props){
//         super(props)
//         this.buttonClick = this.buttonClick.bind(this);
//         this.state = {
//             hoge: 0
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                   {props.name}
//                   {this.state.hoge}歳
//                   {props.height}cm
//                   <button onClick={this.buttonClick}>ぼたん</button>
//             </div>
//         );
//     }
//
//     private buttonClick() {
//       this.setState({
//         hoge: 1
//       });
//
//       window.alert(`${props.name}だよー！`);
//     }
// }