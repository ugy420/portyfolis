import Button from "./ui/Button"

export default function Header(){
    return (
        <div className="head-div">
            <a>.ug</a>
            <Button text="Curriculum Vitae"/>
            <Button text="☰"/>
        </div>
    );
}