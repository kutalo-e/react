import React from "react";
import {Data} from "../../App";
import {Link, LinkProps} from "../link/link";

export interface CardProps {
    item: Data
}

export class Card extends React.Component<CardProps> {
    render() {
        return (
            <div className={'product'}>
                <img src={this.props.item.image} className={'product__img'}/>
                <h2 className={'product__title'}>
                    {this.props.item.title}
                </h2>
                <p className={'product__description'}>
                    {this.props.item.descr}
                </p>
                <ItemsWrapper >
                    <div className={'product__price'}>
                        {this.props.item.price} &#8381;
                    </div>
                    <Link  button = {'В корзину'} link={'#'}/>
                </ItemsWrapper>
            </div>
        );
    }
}
export const ItemsWrapper = (props:any) => {
    return (
      <div className={'product__controls'}>
        {props.children}    
    </div>
    );
  }
// export const ItemsWrapper: React.FC = (props:any) => {
//     return(
//         <div className={'product__controls'}>
//             {props.children}
//         </div>
//     );
// }
