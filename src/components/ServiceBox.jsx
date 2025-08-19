const ServiceBox = ({url, name, description}) => {
    return (
        <div className="w-full flex flex-col gap-2 bg-sky-300 rounded-xl p-6">
            <img src={url} alt="Service Logo" />
            <h2 className="font-brush text-3xl text-sky-900 pt-4">{name}</h2>
            <p className="text-xl font-light text-sky-800">
                {description}
            </p>
        </div>
    )
}

export default ServiceBox