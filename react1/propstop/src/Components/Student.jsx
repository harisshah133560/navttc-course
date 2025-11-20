function Student(props) {
        return (
        <div>
            <p className="color-red-500 ">Name:{props.Name} </p>
            <p>Age : {props.Age} </p>
            <p>Student:{props.isStudent ? "yes" : "No" } </p>
        </div>
    );

}
export default Student;
