import * as React from "react";
import * as Calculator from "react-credit-calculator";
import * as Discount from "react-credit-calculator-discount";

export class Layout extends React.Component {
    app = () => {
        return ( <
            Calculator.Controller >
            <
            Discount.Controller >
            <
            Discount.Control type = "discountType"
            rate = { 0.5 } >
            <
            Discount.Button {...buttonProps } >
            Activate / deactivate discount with type "discountType" <
            /Discount.Button> <
            /Discount.Control> <
            /Discount.Controller> <
            /Calculator.Controller>
        )
    }
}