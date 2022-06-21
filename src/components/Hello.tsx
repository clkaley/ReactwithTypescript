const Hello = ({name,description,label}:{name:string,description:string,label:string}) => {
    return (
        <div>
                Hello {name} - {description} - {label}
        </div>
    );
};

export default Hello;