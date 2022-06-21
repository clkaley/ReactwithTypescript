//data şeklim nasıl olucaksa interface içinde yazıp daha sonra bunu type olarak kullanıcam
interface IHelloProps{
    name:string,
    description:string,
    label:string
}


const Merhaba = ({name,description,label}:IHelloProps) => {
    return (
        <div>
            <h2>Merhaba Component</h2>
            {name}-{description}-{label}
        </div>
    );
};

export default Merhaba;