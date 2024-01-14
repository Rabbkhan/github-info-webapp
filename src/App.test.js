
import { render, screen } from "@testing-library/react";
import App from "./App";
test("test 1" , ()=>{

render(<App/>)

const buttonElem = screen.getByRole("button",{
    name:'text button', exact:false})
    expect(buttonElem).toBeInTheDocument()

})